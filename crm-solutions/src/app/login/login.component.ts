import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public card = {
    iconTye: 'mala',
    cardValue: '-5%',
    countActions: 64,
    information: 'Leads'
  };

  constructor() { }

  ngOnInit() {
  }

}
