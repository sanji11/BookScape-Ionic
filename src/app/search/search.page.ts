import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  isLoading = false;
  results: Observable<any>;
  searchTerm = '';
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  searchChanged(){
    if(this.searchTerm !== ''){
      this.isLoading = true;
      this.results = this.bookService.searchBookByTitle(this.searchTerm);
      console.log(this.results);
      this.isLoading = false;
    }else{
      this.results = null;
    }
  }

}
