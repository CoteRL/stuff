import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'tvshows', component: TvshowsComponent}
];
