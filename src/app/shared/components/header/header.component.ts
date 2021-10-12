import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  message:string;
  subscription: Subscription;
  
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
   
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value);
    if(this.autoRenew.value){
      this.dataService.sendMessage("set");
    }else{
      this.dataService.sendMessage("unset");
    }
    
  }
}
