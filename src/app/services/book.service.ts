/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'https://openlibrary.org/search.json?title=';
  authorUrl = 'https://openlibrary.org/search.json?author=';
  detailsUrl = 'https://openlibrary.org';
  genresUrl = 'http://openlibrary.org/subjects';

  constructor(private http: HttpClient) { }
  searchBookByTitle(title: string): Observable<any>{
    const completeUrl = this.url + title;
    console.log(completeUrl);
    return this.http.get(`${completeUrl}`).
    pipe(
      map(data => data['docs']));
  }

  getDetails(key: string): Observable<any>{
    const completeDetailUrl = this.detailsUrl + key + '.json';
    console.log(completeDetailUrl);
    return this.http.get(`${completeDetailUrl}`);
  }

  getBooksByAuthor(name: string): Observable<any>{
    const completeAuthorUrl = this.authorUrl + name;
    console.log(completeAuthorUrl);
    return this.http.get(`${completeAuthorUrl}`).
    pipe(
      map(data => data['docs']));
  }
  getBooksByGenres(genre: string): Observable<any>{
    const completeGenreUrl = this.genresUrl + genre + '.json';
    console.log(completeGenreUrl);
    return this.http.get(`${completeGenreUrl}`);
  }

}
