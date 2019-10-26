import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  public model: any;
  public arrow = true;
  public list = [
    {id: 1, name: 'Rafael 1'},
    {id: 2, name: 'Rafael 2'},
    {id: 3, name: 'Rafael 3'},
    {id: 4, name: 'Rafael 4'},
    {id: 5, name: 'Rafael 5'},
  ];

}
