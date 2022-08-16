import { Component, OnInit } from '@angular/core';
import { ApigetService } from './apiget.service';
import {Test} from './test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  content?: string;
  searchValue = '';
  visible = false;
  donner :Test[] = [];
  
  listOfDisplayData : any;
  constructor (private apiser:ApigetService){}
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.donner.filter((item: Test) => item.id.toString().indexOf(this.searchValue) !== -1);
  }

getall():void{
  this.apiser.getAll()
  .subscribe(
    data => {
        this.donner=data.reverse();
        console.log(data);
        this.listOfDisplayData = [...this.donner];
    },
    error => {
      console.log(error);
    });
}

  ngOnInit(): void {
   this.getall();
  }
}
