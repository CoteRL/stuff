import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

import { AppRoutes } from './app.routes';
import { MainComponent } from './main.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

@NgModule({
  declarations: [
    MainComponent,
    MoviesComponent,
    TvshowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    DropdownModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule { }
