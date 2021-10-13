import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { data, TeamData } from './team-data';

@Component({
  selector: 'app-widget-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.scss']
})
export class TeamcardComponent implements OnInit {
  teamCards: Array<TeamData> = data;
  constructor(private dataService: DataService) { }
  message: string;
  
  ngOnInit(): void {
    this.dataService.receiveMessage().subscribe((d) => {
      this.message = d;
      console.log(this.message);
    });
  }

  selectPost(data:TeamData) {
    console.log(`The selected post is::  ${data.title}`);
  }
}
