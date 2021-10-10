import { Component, OnInit } from '@angular/core';
import { data, TourData } from './tour-data';

@Component({
  selector: 'app-widget-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  tourCards: Array<TourData> = data;
  constructor() {}

  ngOnInit(): void {}

  selectPost(data: TourData) {
    console.log(`The selected post is::  ${data.title}`);
  }
}
