import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvshowSeasonsComponent } from './tvshow-seasons/tvshow-seasons.component';
import { TvshowEpisodesComponent } from './tvshow-episodes/tvshow-episodes.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:movieId', component: MovieComponent},
  { path: 'tvshows', component: TvshowsComponent},
  { path: 'tvshow/:showId', component: TvshowComponent, children: [
        {path: ':seasonId', component: TvshowSeasonsComponent, children: [
          {path: ':episodeId', component: TvshowEpisodesComponent}
        ]}
      ]}
];
