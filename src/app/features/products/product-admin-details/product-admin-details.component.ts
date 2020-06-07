import { Product } from './../services/products-data.service';
import { SearchParams } from '../../../models/search-params.model';

import { Observable, Subject } from 'rxjs';
import { ProductsService} from '../services/products-data.service';
import { Component } from '@angular/core';
import { tap, take, map, mergeMap, takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionTypeEnum } from 'src/app/models/action-type.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductSearchParams } from '../../models/product-search-params.model';

@Component({
  templateUrl: './product-admin-details.component.html'
})
export class ProductAdminDetailsComponent {
  searchParams: ProductSearchParams = {
    all: true
  };  
  destroy$ = new Subject();
  form: FormGroup;

  constructor(private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.route.paramMap.pipe(
        map((params: ParamMap) => {
          this.searchParams.id = params.get('productId');
          return this.searchParams
        }),
        mergeMap((searchParams: ProductSearchParams) => 
                  this.productsService.getDataById(searchParams.id)),
        tap((product) => this.form = this.initForm(product)),
        takeUntil(this.destroy$)
      ).subscribe((product) => {
        
      });
  }


  ngOnInit(): void {

    
  }

  initForm(product?: Product) {
   return this.formBuilder.group({
      name: [product.name ? product.name : null, [Validators.required]],
      description: [product.description ? product.description : null, [Validators.required]],
      price: [product.price ? product.price : null, [Validators.required]],
    })
  }
  
  submit(form) {
    const value = form.value;

    const requestBody = {
      ...value,
      id: this.searchParams.id
    }

    return this.productsService.update(requestBody).pipe(
      take(1)
    )
      .subscribe()
  }
 

  clear() {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
