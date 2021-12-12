import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksByAuthorPageRoutingModule } from './books-by-author-routing.module';

import { BooksByAuthorPage } from './books-by-author.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksByAuthorPageRoutingModule
  ],
  declarations: [BooksByAuthorPage]
})
export class BooksByAuthorPageModule {}
