import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.page.html',
  styleUrls: ['./authors-list.page.scss'],
})
export class AuthorsListPage implements OnInit {

  authorList: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('authors')){
        return;
      }
      const authorStr = paramMap.get('authors');
      this.authorList = authorStr.split(',');
    });
  }

}
