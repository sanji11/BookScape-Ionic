import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.page.html',
  styleUrls: ['./genres-list.page.scss'],
})
export class GenresListPage implements OnInit {

  genreList: any;
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('genres')){
        return;
      }
      const genreStr = paramMap.get('genres');
      this.genreList = genreStr.split(',');
    });
  }

}
