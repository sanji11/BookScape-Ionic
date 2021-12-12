import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Book } from '../model/book';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-favorite-book',
  templateUrl: './favorite-book.page.html',
  styleUrls: ['./favorite-book.page.scss'],
})
export class FavoriteBookPage implements OnInit {

  data: any;
  constructor(private db: DbService, private alertController: AlertController) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe((res) => {
      if(res){
        this.db.getBooks().subscribe(item => {
          for(const x of item ){
            x.coverKey = x.coverKey.substring(0, x.coverKey.indexOf('.'));
          }
          this.data = item;
          console.log(this.data);
        });
      }
    });
  }
  deleteBook(aBook: Book){
    this.presentAlert('Confirmation', 'Are you sure you want to delete this book from your favorite?', aBook);

  }

  async presentAlert(hdr: string, msg: string, aBook: Book){
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
          this.db.deleteBookById(aBook.id);
        }
      }]
    });
    await alert.present();
  }

}
