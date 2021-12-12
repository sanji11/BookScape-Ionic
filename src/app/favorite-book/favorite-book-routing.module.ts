import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteBookPage } from './favorite-book.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteBookPageRoutingModule {}
