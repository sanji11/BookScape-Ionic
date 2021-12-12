import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteBookPageRoutingModule } from './favorite-book-routing.module';

import { FavoriteBookPage } from './favorite-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteBookPageRoutingModule
  ],
  declarations: [FavoriteBookPage]
})
export class FavoriteBookPageModule {}
