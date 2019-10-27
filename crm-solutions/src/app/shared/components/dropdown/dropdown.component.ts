import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'crm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('changeDivSize', [
      // amplica a imagem
      // state('initial', style({
      //   backgroundColor: 'green',
      //   transform: 'scale(1)'
      // })),
      // state('final', style({
      //   backgroundColor: 'red',
      //   transform: 'scale(1.5)'
      // })),
      // transition('final=>initial', animate(4000)),
      // transition('initial=>final', animate(300)),
      state('void', style({
        opacity: 0,
        height: 0
      })),
      transition('* <=> *', animate(250)),
    ])
  ],
})
export class DropdownComponent {

  public model: any;
  public arrow = false;
  public list = [
    {id: 1, name: 'Rafael 1'},
    {id: 2, name: 'Rafael 2'},
    {id: 3, name: 'Rafael 3'},
    {id: 4, name: 'Rafael 4'},
    {id: 5, name: 'Rafael 5'},
    {id: 6, name: 'Rafael 6'},
    {id: 7, name: 'Rafael 7'},
    {id: 8, name: 'Rafael 8'},
    {id: 6, name: 'Rafael 6'},
    {id: 7, name: 'Rafael 7'},
    {id: 8, name: 'Rafael 8'},
    {id: 6, name: 'Rafael 6'},
    {id: 7, name: 'Rafael 7'},
    {id: 8, name: 'Rafael 8'},
  ];

}
