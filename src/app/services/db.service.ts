import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  booksList = new BehaviorSubject([]);
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform, private sqlite: SQLite, private httpClient: HttpClient,private sqlPorter: SQLitePorter) {
    this.platform.ready().then(() => {
      this.createDBAndTables();
    });
  }
  createDBAndTables() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.storage = db;
      this.storage.executeSql(`CREATE TABLE IF NOT EXISTS BOOK(id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT, author TEXT, key TEXT, coverKey TEXT)`, []).then(() => {
        this.loadBooks();
        this.isDbReady.next(true);
      })
      .catch(e => console.log(e));

    }).catch(e => console.log(e));
  }

  getDatabaseState() {
    return this.isDbReady.asObservable();
  }

  getBooks(): Observable<Book[]> {
    return this.booksList.asObservable();
  }

  loadBooks() {
    return this.storage.executeSql(`SELECT * FROM BOOK`, []).then(res => {
      const books: Book[] = [];
      for(let i = 0; i < res.rows.length; i++) {
        books.push({
          id: res.rows.item(i).id,
          title: res.rows.item(i).title,
          author: res.rows.item(i).author,
          key: res.rows.item(i).key,
          coverKey: res.rows.item(i).coverKey
        });
      }
      this.booksList.next(books);
      console.log('From database', res);
      console.log('After serialize', books);
    }).catch(e=>console.log(e));
  }
  addBook(t, athr, k, cKey) {
    const data = [t, athr, k, cKey];;
    return this.storage.executeSql(`INSERT INTO BOOK(title, author, key, coverKey) VALUES(?, ?, ?, ?)`, data).then(res => {
      this.loadBooks();
      console.log('Added Book', res);
      console.log('Inserted Id', res.insertId);
      return res.insertId;
    }).catch(e=>console.log(e));
  }

  getBookById(id: number) {
    return this.storage.executeSql(`SELECT * FROM BOOK WHERE ID=?`, [id]).then(res => ({
        id: res.rows.item(0).id,
        title: res.rows.item(0).title,
        author: res.rows.item(0).author,
        key: res.rows.item(0).key,
        coverKey: res.rows.item(0).coverKey
      })).catch(e=>console.log(e));
  }

  deleteBookById(id: number) {
    return this.storage.executeSql(`DELETE FROM BOOK WHERE ID=?`, [id]).then(res => {
      this.loadBooks();
    }).catch(e=>console.log(e));
  }

  updateBook(book: Book) {
    const data = [book.title, book.author, book.key, book.coverKey, book.id];
    return this.storage.executeSql(`UPDATE BOOK SET title=?, author=?, key=?, coverKey=? WHERE ID=?`, data).then(res => {
      this.loadBooks();
      console.log('updated', res);
      console.log('After updated', this.booksList);
    }).catch(e=> console.log(e));
  }
}
