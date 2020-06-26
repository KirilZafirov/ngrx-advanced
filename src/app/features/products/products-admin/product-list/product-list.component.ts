import { Product } from './../../services/products-data.service';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
    @Input() products: Product[];
    @Input() activeProductId: string;

    @Output() selected: EventEmitter<string> = new EventEmitter(); 
    @Output() removed: EventEmitter<Product> = new EventEmitter(); 

    constructor() { 
    }
    
    select(productId: string) {
      this.selected.emit(productId);
    }

    remove(product: Product) {
      this.removed.emit(product);
    }
}
