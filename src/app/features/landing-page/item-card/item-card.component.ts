import { CardItemModel } from '../../models/card-item-model';
 
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'; 
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {

    @Input() item: CardItemModel;

    @Output() onViewDetails: EventEmitter<string> = new EventEmitter<string>();
    constructor() { 
      
    } 
  
    viewDetails(id: string) {
      this.onViewDetails.emit(id);
    }
}
