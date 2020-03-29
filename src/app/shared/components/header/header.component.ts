import { Component, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'crm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public flag = false;

  @Output()
  public openMenu = new EventEmitter<boolean>();
  public showSearch = false;

  constructor(
    private eRefe: ElementRef
  ) {  }

}
