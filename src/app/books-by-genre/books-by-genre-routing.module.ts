import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksByGenrePage } from './books-by-genre.page';

const routes: Routes = [
  {
    path: '',
    component: BooksByGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksByGenrePageRoutingModule {}
