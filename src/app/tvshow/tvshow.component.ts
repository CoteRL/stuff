import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

  private tvshowId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['showId'])
      .subscribe(tvshowId => this.tvshowId = tvshowId)
  }

}
