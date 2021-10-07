import { Component, OnInit } from '@angular/core';
import { data, Data } from './data';

@Component({
  selector: 'app-widget-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  popularCards: Array<Data> = data;
  constructor() { }

  ngOnInit(): void {
  }

  selectPost(data:Data) {
    console.log(`The selected post is::  ${data.title}`);
  }
}
