import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BookService } from '../services/book.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  bookDetails: any;
  authorNames: any;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService,
    private alertController: AlertController, private dbService: DbService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('key') || !paramMap.has('authors')){
        return;
      }
      const key = paramMap.get('key');
      this.authorNames = paramMap.get('authors');
      this.bookService.getDetails(key).subscribe(data => {
        console.log(data);
        this.bookDetails = data;
      });
    });
  }
  addFavorites(){
    this.presentAlert('Save Favorite Book', 'Do you want to save this book to your favorite book list?');
  }
  async presentAlert(hdr: string, msg: string){
    const alert = await this.alertController.create({
      header: hdr,
      message: msg,
      buttons: [{
        text: 'No',
        handler: () =>{
          console.log('canceled');
        },
      },{
        text: 'Yes',
        handler: () =>{
          console.log('yes');
          this.dbService.addBook(this.bookDetails.title, this.authorNames, this.bookDetails.key, this.bookDetails.covers[0]);
        }
      }]
    });
    await alert.present();
  }

}
