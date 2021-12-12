import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-by-author',
  templateUrl: './books-by-author.page.html',
  styleUrls: ['./books-by-author.page.scss'],
})
export class BooksByAuthorPage implements OnInit {

  authorName: string;
  booksByAuthor: any;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('name')){
        return;
      }
      this.authorName = paramMap.get('name');
      this.booksByAuthor = this.bookService.getBooksByAuthor(this.authorName);
      console.log(this.booksByAuthor);
    });
  }

}
