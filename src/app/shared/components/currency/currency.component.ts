import { Component, Input } from "@angular/core"; 
@Component({
    selector: 'app-currency',
    template: `
    <span [title]="amount | currency:currencySign:'symbol':symbolFormat">{{ amount | currency:currencySign:'symbol':symbolFormat}}</span>
    `
  })
  export class CurrencyComponent {
   
    @Input() amount;

    @Input() currencySign;
    @Input() symbolFormat = '1.2-2';

    constructor() {}
  }

