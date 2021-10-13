import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { data, TrendtourData } from './trendtour-data';
import HC_exporting from 'highcharts/modules/exporting';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-widget-trendtours',
  templateUrl: './trendtours.component.html',
  styleUrls: ['./trendtours.component.scss']
})
export class TrendtoursComponent implements OnInit {
  tourCards: Array<TrendtourData> = data;
  @Input() label: string="";
  @Input() total: string="";
  @Input() percentage: string="";
  chartOptions: {} = {};
  Highcharts = Highcharts;
  message: string;
  constructor(private dataService: DataService) { }


  selectPost(data: TrendtourData) {
    console.log(`The selected post is::  ${data.title}`);
  }
  ngOnInit(): void {
    this.dataService.receiveMessage().subscribe((d) => {
      this.message = d;
      console.log(this.message);
    });
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderwidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      
      title: {
        text: null
      },
      
      subtitle: {
        text: null
      },
      
      tooltip:{
        split: true,
        outside: true
      },
      
      credits: {
        enabled: false
      },

      legend: {
        enabled: false
      },

      exporting: {
        enabled: false
      },

      xAxis:{
        labels:{
          enabled: false,
        },
        title:{
          text:null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions:[]
      },

      yAxis:{
        labels:{
          enabled: false,
        },
        title:{
          text:null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions:[]
      },

      series: [{        
        data: [71, 78, 39, 66]
      }]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}



 
