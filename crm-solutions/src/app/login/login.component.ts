import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../core/Models/MenuModel';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public card = {
    iconTye: 'mala',
    cardValue: '5%',
    countActions: 64,
    information: 'Leads'
  };

  // recebe da API
  public list = [
    {name: 'Dashboard', icon: 'dashboard'},
    {name: 'Deals', icon: 'peaple-cicle'},
    {name: 'Contacts', icon: 'star'},
    {name: 'Stats', icon: 'timeline'},
    {name: 'Settings', icon: 'setting'},
  ];
  public listSecundary = [
    {name: 'Bryce Canyon a stunnin…', icon: 'mala'},
    {name: 'What makes a hotel bou…', icon: 'mala'},
  ];
  public listaDefault = [
    {name: 'Bryce Canyon a stunnin…', icon: 'client'},
    {name: 'What makes a hotel bou…', icon: 'client'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
