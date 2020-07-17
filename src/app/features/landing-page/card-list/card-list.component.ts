 
import { Component, ChangeDetectionStrategy, Input } from '@angular/core'; 
import { CardItemModel } from '../../models/card-item-model';
import { ItemViewType } from '../../models/item-view-type.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

    @Input() list: CardItemModel[]; 
    
    constructor() { 
      
    } 
  
}
