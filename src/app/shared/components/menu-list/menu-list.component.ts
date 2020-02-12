import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/core/Models/MenuModel';

@Component({
  selector: 'crm-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input()
  public menuList: MenuModel [];

  @Input()
  public title = '';

  @Input()
  public btnTitle = '';

  @Input()
  public show = new EventEmitter<boolean>();

  @Output()
  public clickMenu = new EventEmitter<any>();

  public showColor = false;

  ngOnInit() {
    this.showColor = (!this.btnTitle.length && !this.title.length && this.menuList[0]) ? true : false;
  }
}
