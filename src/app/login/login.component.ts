import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public openMenu = true;

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

  public lisN = [11.2, 22.5, 44.1, 100];
  public lisLs = ['Mail', 'Phone', 'Site', 'API'];


  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  show(event: string) {
    const data = event.toLocaleLowerCase();
    console.log('data ', data);
  }

  sendForm() {
    // this.form.value;
    console.log('FORM:::', this.form.value)
  }

  getValueMenu(data) {
    this.openMenu = data.closed;
  }

}
