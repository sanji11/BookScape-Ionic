import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenresListPageRoutingModule } from './genres-list-routing.module';

import { GenresListPage } from './genres-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenresListPageRoutingModule
  ],
  declarations: [GenresListPage]
})
export class GenresListPageModule {}
