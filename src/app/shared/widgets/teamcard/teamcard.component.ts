import { Component, OnInit } from '@angular/core';
import { data, TeamData } from './team-data';

@Component({
  selector: 'app-widget-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.scss']
})
export class TeamcardComponent implements OnInit {
  teamCards: Array<TeamData> = data;
  constructor() { }

  ngOnInit(): void {
  }

  selectPost(data:TeamData) {
    console.log(`The selected post is::  ${data.title}`);
  }
}
