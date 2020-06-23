
import { ProductsPageActions } from 'src/app/features/products/products-admin/actions';
import { Component } from '@angular/core';
import { tap, takeUntil, filter } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductSearchParams } from 'src/app/features/models/product-search-params.model';
import { Subject } from 'rxjs';
import { ProductsService, Product } from '../../services/products-data.service';
import { Store } from '@ngrx/store';
import * as fromRoot from "src/app/shared/state";
@Component({
  templateUrl: './product-admin-details.component.html'
})
export class ProductAdminDetailsComponent {
  searchParams: ProductSearchParams = {
    all: true
  };
  destroy$ = new Subject();
  form: FormGroup;
  currencyType = CURRENCY_TYPE;

  constructor(
    private store: Store<fromRoot.State>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 

    this.route.paramMap.pipe(
      tap((params: ParamMap) => {
        this.searchParams.id = params.get('productId');
        this.store.dispatch(ProductsPageActions.selectProduct({ productId: this.searchParams.id }))
        return this.searchParams
      }),
      takeUntil(this.destroy$)
    ).subscribe((product) => {

    });

    this.store.select(fromRoot.selectProductDetails).pipe(
      filter(p => !!p)
    ).subscribe(product => {
      this.form = this.initForm(product);
      this.selected = product.currencyType
    });
  }

  selected: string;
  ngOnInit(): void {


  }

  initForm(product?: Product) {
    return this.formBuilder.group({
      name: [product.name ? product.name : null, [Validators.required]],
      description: [product.description ? product.description : null, [Validators.required]],
      price: [product.price ? product.price : null, [Validators.required]],
      currencyType: [product.currencyType ? product.currencyType : null, [Validators.required]],
    })
  }

  submit(form) {
    const value = form.value;

    const requestBody = {
      ...value,
      id: this.searchParams.id
    }

    this.store.dispatch(
      ProductsPageActions.updateProduct({ productId: this.searchParams.id, product: requestBody })
    );
    this.router.navigateByUrl('/products');
  }


  clear() {
    this.store.dispatch(ProductsPageActions.clearSelectedProduct());
    this.router.navigateByUrl('/products');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}


export const CURRENCY_TYPE =
  [{
    display: '£GBP',
    value: 'GBP'
  },
  {
    display: '$USD',
    value: 'USD'
  },
  {
    display: '€EUR',
    value: 'EUR'
  }]