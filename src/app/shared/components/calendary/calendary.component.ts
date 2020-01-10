import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crm-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.scss']
})
export class CalendaryComponent {

  @Output() open: EventEmitter<number> = new EventEmitter<number>();

  public listWeek: string[] = ['Today', 'Week', 'Month', 'Quarter', 'Year'];

}
