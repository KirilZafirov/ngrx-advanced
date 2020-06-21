import { tap } from 'rxjs/operators';
import { ProductSearchParams } from './../../models/product-search-params.model'; 
import { Observable } from 'rxjs';
import { Product } from './../services/products-data.service';
import { Component } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from "src/app/shared/state";
import { ProductsPageActions } from './actions';
import { SearchParams } from 'src/app/models/search-params.model';
@Component({
  templateUrl: './products-admin-shell.component.html'
})
export class ProductsAdminShellComponent {
  searchParams: SearchParams = {
    all: true
  };
  products$: Observable<Product[]>; 
  activeProduct$: Observable<Product>;

  addLink = './add-product';
  displayedColumns = ['name' , 'description' , 'price'];

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
      this.products$ = this.store.select(fromRoot.selectAllProducts);
  }


  ngOnInit(): void {
    this.getProducts();
  } 

  getProducts() {
    this.store.dispatch(ProductsPageActions.enter({searchParams: this.searchParams}));
  }

  removeItem(item: Product) {
    this.store.dispatch(ProductsPageActions.deleteProduct({ productId: item.id}));
  }
 
  // setActiveItem(item: Product) {
  //   // this.store.dispatch(ProductsPageActions.selectProduct({productId: item.id}));
  // }
}
