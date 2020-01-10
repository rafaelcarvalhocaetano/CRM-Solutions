import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'crm-deta-list',
  templateUrl: './deta-list.component.html',
  styleUrls: ['./deta-list.component.scss']
})
export class DetaListComponent implements OnInit {

  public showCalendary = false;

  constructor() { }

  ngOnInit() {
  }

  public showDate() {
    this.showCalendary = !this.showCalendary;
  }



}
