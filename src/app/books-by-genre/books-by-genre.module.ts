import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksByGenrePageRoutingModule } from './books-by-genre-routing.module';

import { BooksByGenrePage } from './books-by-genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksByGenrePageRoutingModule
  ],
  declarations: [BooksByGenrePage]
})
export class BooksByGenrePageModule {}
