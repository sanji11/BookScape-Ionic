import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.page.html',
  styleUrls: ['./books-by-genre.page.scss'],
})
export class BooksByGenrePage implements OnInit {

  genre: any;
  booksByGenre: any;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('genre')){
        return;
      }
      this.genre = paramMap.get('genre');
      this.booksByGenre = this.bookService.getBooksByAuthor(this.genre);
      console.log(this.booksByGenre);
    });
  }

}
