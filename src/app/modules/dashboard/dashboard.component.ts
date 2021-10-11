import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
export interface PlayerStats {
  name: string;
  position: number;
  points: number;
  team: string;
}

const PLAYER_STAT_DATA: PlayerStats[] = [
  {position: 1, name: 'Ajesh Anil', points: 74.82, team: 'Eagles XI TVM'},
  {position: 2, name: 'Vishu M', points: 74.11, team: 'City Marvels Banglore'},
  {position: 3, name: 'Nivin John', points: 72.15, team: 'Golden Knights Chennai'},
  {position: 4, name: 'Ronaldo', points: 70.26, team: 'Red Dragons Eklm'},
  {position: 5, name: 'Bekham', points: 70.05, team: 'Avengers Kozhikode'},


];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart :{ name: string; data: number[]; }[]=[];
  displayedColumns: string[] = ['position', 'name', 'points', 'team'];
  dataSource = PLAYER_STAT_DATA;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.getBigCharts();
  }

}
