import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { data, Data } from './data';

@Component({
  selector: 'app-widget-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss'],
})
export class PopularCardComponent implements OnInit {
  popularCards: Array<Data> = data;
  constructor(private dataService: DataService) {}
  message: string;
  ngOnInit(): void {
    this.dataService.receiveMessage().subscribe((d) => {
      this.message = d;
      console.log(this.message);
    });
  }

  selectPost(data: Data) {
    console.log(`The selected post is::  ${data.title}`);
  }
}
