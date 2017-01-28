import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

import { AppRoutes } from './app.routes';
import { MainComponent } from './main.component';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { TvshowSeasonsComponent } from './tvshow-seasons/tvshow-seasons.component';
import { TvshowEpisodesComponent } from './tvshow-episodes/tvshow-episodes.component';
import { TvshowEpisodeDetailComponent } from './tvshow-episode-detail/tvshow-episode-detail.component';
import { FiltersComponent } from './filters/filters.component';
import { ResultListComponent } from './result-list/result-list.component';



@NgModule({
  declarations: [
    MainComponent,
    MoviesComponent,
    MovieDetailComponent,
    TvshowsComponent,
    TvshowDetailComponent,
    TvshowSeasonsComponent,
    TvshowEpisodesComponent,
    TvshowEpisodeDetailComponent,
    TvshowDetailComponent,
    FiltersComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    DropdownModule
  ],
  providers: [],
  bootstrap: [ MainComponent ]
})

export class AppModule { }
