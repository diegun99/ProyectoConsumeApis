import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mydate : Date = new Date('Wed Apr 26 2017 10:38:12');
  mydatetransormado : string |null = '';

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log(this.mydate)
    this.mydatetransormado =   this.transformDate(this.mydate);
    console.log(this.mydatetransormado)



  }
  




  transformDate(date : Date) {
   return this.datePipe.transform(date, 'yyyy-MM-dd'); //whatever format you need. 
  }

}
