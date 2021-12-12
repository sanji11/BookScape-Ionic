import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'favorite-book',
    loadChildren: () => import('./favorite-book/favorite-book.module').then( m => m.FavoriteBookPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'book-detail',
    loadChildren: () => import('./book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
  {
    path: 'genres-list',
    loadChildren: () => import('./genres-list/genres-list.module').then( m => m.GenresListPageModule)
  },
  {
    path: 'authors-list',
    loadChildren: () => import('./authors-list/authors-list.module').then( m => m.AuthorsListPageModule)
  },
  {
    path: 'books-by-author/:name',
    loadChildren: () => import('./books-by-author/books-by-author.module').then( m => m.BooksByAuthorPageModule)
  },
  {
    path: 'books-by-genre/:genre',
    loadChildren: () => import('./books-by-genre/books-by-genre.module').then( m => m.BooksByGenrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
