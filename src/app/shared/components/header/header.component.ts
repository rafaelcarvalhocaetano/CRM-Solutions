import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  public openMenu = new EventEmitter<boolean>();
  public showSearch = false;

}
