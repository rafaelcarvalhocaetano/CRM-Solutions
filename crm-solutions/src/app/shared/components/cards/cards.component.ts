import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crm-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  public cardValue: string;

  @Input()
  public cardCount: string;

  @Input()
  public cardMensage: string;

  private sourceIcon: string;

  public bolls = false;

  @Input() set iconType(value: string) {
    this.sourceIcon = `../../../assets/icons/${value}.png`;
  }

  get iconType(): string {
    return this.sourceIcon;
  }

  ngOnInit() {
    this.verfica();
  }

  private verfica() {
    const data = +this.cardValue.replace('%', '');
    this.bolls = (data < 0) ? true : false;
  }

}
