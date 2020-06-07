import { ProductSearchParams } from './../../models/product-search-params.model';
import { SearchParams } from './../../../models/search-params.model';

import { Observable } from 'rxjs';
import { ProductsService, Product } from './../services/products-data.service';
import { Component } from '@angular/core';
import { tap, take, map, mergeMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionTypeEnum } from 'src/app/models/action-type.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './products-admin-shell.component.html'
})
export class ProductsAdminShellComponent {
  searchParams: ProductSearchParams = {
    all: true
  };
  products$: Observable<Product[]>; 
 
  addLink = './add-product';
  displayedColumns = ['name' , 'description' , 'price'];

  activeLinkIndex = -1;
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute) {

    this.products$ =  this.productsService.getData(this.searchParams);

  }


  ngOnInit(): void {

  } 

  removeItem(item: Product) {
    this.productsService.remove(item).subscribe();
  }
 
}
