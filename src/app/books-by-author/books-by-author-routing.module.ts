import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksByAuthorPage } from './books-by-author.page';

const routes: Routes = [
  {
    path: '',
    component: BooksByAuthorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksByAuthorPageRoutingModule {}
