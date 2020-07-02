import { Observable } from 'rxjs';
import { Product } from './../services/products-data.service';
import { Component } from '@angular/core'; 
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from "src/app/shared/state";
import { ProductsPageActions } from './actions';
import { SearchParams } from 'src/app/models/search-params.model';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: './products-admin-shell.component.html'
})
export class ProductsAdminShellComponent {
  searchParams: SearchParams = {
    all: true
  };
  products$: Observable<Product[]>; 
  activeProduct$: Observable<Product>;
  activeProductId$: Observable<string>;
  isProductFormActive$: Observable<boolean>;

  displayedColumns = ['name' , 'description' , 'price'];

  constructor(private store: Store<fromRoot.State>,
              private router: Router) {
      this.products$ = this.store.select(fromRoot.selectAllProducts);
      this.activeProductId$ = this.store.select(state => state.products.activeProductId);
      this.isProductFormActive$ = this.store.select(fromRoot.isProductFormActive);
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
 
  selectProduct(productId: string) {
    this.router.navigateByUrl(`/products/${productId}`);
  }

  addProduct() {
    this.router.navigateByUrl('/products/add-product');
  }
}
