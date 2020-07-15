import { CardItemModel } from '../../models/card-item-model';
 
import { Component, ChangeDetectionStrategy, Input } from '@angular/core'; 
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {

    @Input() item: CardItemModel;
    
    constructor() { 
      
    } 
  
}
