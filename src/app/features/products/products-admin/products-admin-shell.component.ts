import { UiMetaService } from './../../../core/services/ui-meta.service';
import { Observable } from 'rxjs';
import { Product } from './../services/products-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core'; 
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from "src/app/shared/state";
import { ProductsPageActions } from './actions';
import { SearchParams } from 'src/app/models/search-params.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: './products-admin-shell.component.html'
})
export class ProductsAdminShellComponent implements OnInit , OnDestroy {
  searchParams: SearchParams = {
    all: true
  };
  products$: Observable<Product[]>; 
  activeProduct$: Observable<Product>;
  activeProductId$: Observable<string>;
  isProductFormActive$: Observable<boolean>; 
  productDetailsLoading$: Observable<boolean>; 
  
  constructor(private store: Store<fromRoot.State>,
              private router: Router,
              public dialog: MatDialog,
              private uiMeta: UiMetaService) {
      this.products$ = this.store.select(fromRoot.selectAllProducts).pipe(
        tap(products => this.metaData(products))
      );
      this.activeProductId$ = this.store.select(state => state.products.activeProductId);
      this.isProductFormActive$ = this.store.select(fromRoot.isProductFormActive);
      this.productDetailsLoading$ = this.store.select(state => state.products.productDetailsLoading);
      
  } 

  ngOnInit(): void {
    this.getProducts();
  } 

  getProducts() {
    this.store.dispatch(ProductsPageActions.enter({searchParams: this.searchParams}));
  }

  removeItem(item: Product) {
    this.confirmDialog(item);
  }
 
  selectProduct(productId: string) {
    this.router.navigateByUrl(`/products/${productId}`);
  }

  addProduct() {
    this.router.navigateByUrl('/products/add-product');
  } 

  ngOnDestroy() {
  }

  metaData(products: Product[]){
    this.uiMeta.setMetaData({
        title: 'Products',
        description: `Check our our collection of ${products.length} products`
    })
}

  confirmDialog(item: Product): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.store.dispatch(ProductsPageActions.deleteProduct({ productId: item.id}));
      }
    });
  }
}
