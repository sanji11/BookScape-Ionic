import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenresListPage } from './genres-list.page';

const routes: Routes = [
  {
    path: '',
    component: GenresListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresListPageRoutingModule {}
