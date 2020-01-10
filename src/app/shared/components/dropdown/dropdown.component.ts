import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'crm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('void', style({
        opacity: 0,
        height: 0
      })),
      transition('* <=> *', animate(250)),
    ])
  ]
})
export class DropdownComponent implements OnInit {

  public model: any;
  public arrow = false;
  public list = [
    {id: 1, name: 'Rafael 1', selected: true},
    {id: 2, name: 'Rafael 2', selected: true},
    {id: 3, name: 'Rafael 3', selected: true },
    {id: 4, name: 'Rafael 4'},
    {id: 5, name: 'Rafael 5'},
    {id: 6, name: 'Rafael 6'},
    {id: 7, name: 'Rafael 7'},
    {id: 8, name: 'Rafael x  8'},
    {id: 26, name: 'Rafael 6'},
    {id: 27, name: 'Rafael w 7'},
    {id: 38, name: 'Rafael h 18'},
    {id: 49, name: 'Rafael gg 9'},
    {id: 10, name: 'Rafael 48'},
    {id: 11, name: 'Rafael 11'},
  ];

  public dataValue: any[] = [];
  public count: number;
  public state: any[];
  public searchValue = '';

  public ngOnInit() {
    this.clearValue();
  }

  public selectItem(data: any) {
    this.state.map(x => {
      if (x.id === data.id && x.selected) {
        delete x.selected;
        this.dataValue.splice(x, 1);
      } else if (x.id === data.id) {
        x.selected = true;
        this.dataValue.push(x.name);
      }
    });
    this.count = this.validCount(this.dataValue);
  }

  public clearValue() {
    this.state = [];
    this.state = this.list;
    this.dataValue = [];
    this.searchValue = '';
    this.state.forEach(x => x.selected ? this.dataValue.push(x.name) : null);
    this.count = this.validCount(this.dataValue);
  }

  private validCount(list: any []) {
    if (list.length < 1) {
      return list[0];
    } else {
      return list.length;
    }
  }

  public searchIntant(data: string) {
    this.searchValue = data;
    this.state = [];
    this.list.filter(x => x.name.includes(this.searchValue) ? this.state.push(x) : null);
  }

  public searchClick() {
    this.state = [];
    this.list.filter(x => x.name.includes(this.searchValue) ? this.state.push(x) : null);
  }

}
