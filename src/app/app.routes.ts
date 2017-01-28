import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { TvshowEpisodesComponent } from './tvshow-episodes/tvshow-episodes.component';
import { TvshowEpisodeDetailComponent } from './tvshow-episode-detail/tvshow-episode-detail.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:recent', component: MoviesComponent},
  { path: 'movie/:movieId', component: MovieDetailComponent},
  { path: 'tvshows', component: TvshowsComponent},
  { path: 'tvshow/:showId', component: TvshowDetailComponent},
  { path: 'tvshow/:showId/:seasonId/:episodeId', component: TvshowEpisodeDetailComponent}
];
