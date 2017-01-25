import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

import { AppRoutes } from './app.routes';
import { MainComponent } from './main.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvshowSeasonsComponent } from './tvshow-seasons/tvshow-seasons.component';
import { TvshowEpisodesComponent } from './tvshow-episodes/tvshow-episodes.component';


@NgModule({
  declarations: [
    MainComponent,
    MoviesComponent,
    MovieComponent,
    TvshowsComponent,
    TvshowComponent,
    TvshowSeasonsComponent,
    TvshowEpisodesComponent
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
