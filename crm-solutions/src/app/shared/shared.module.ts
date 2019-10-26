import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { CardsComponent } from './components/cards/cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { GraphicTrafficComponent } from './components/graphic-traffic/graphic-traffic.component';
import { CalendaryComponent } from './components/calendary/calendary.component';
import { DetaListComponent } from './components/deta-list/deta-list.component';
import { ShowCalendaryComponent } from './components/show-calendary/show-calendary.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CardsComponent,
    MenuListComponent,
    GraphicTrafficComponent,
    CalendaryComponent,
    DetaListComponent,
    ShowCalendaryComponent,
    HeaderComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,
    CardsComponent,
    MenuListComponent,
    GraphicTrafficComponent,
    CalendaryComponent,
    DetaListComponent,
    ShowCalendaryComponent,
    HeaderComponent,
    DropdownComponent,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
