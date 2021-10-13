import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { data, TourData } from './tour-data';

@Component({
  selector: 'app-widget-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  tourCards: Array<TourData> = data;
  message: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.receiveMessage().subscribe((d) => {
      this.message = d;
      console.log(this.message);
    });
  }

  selectPost(data: TourData) {
    console.log(`The selected post is::  ${data.title}`);
  }
}