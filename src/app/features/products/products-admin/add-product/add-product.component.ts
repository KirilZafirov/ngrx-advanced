import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/state';
import { ProductsPageActions } from '../actions';

@Component({
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
   
  form: FormGroup;

  constructor(private store: Store<State>,
    private formBuilder: FormBuilder,
    private router: Router) {
     this.form = this.initForm();
     this.store.dispatch(ProductsPageActions.addProductPageActive({isActive: true}));
  }


  ngOnInit(): void {
  }

  initForm() {
   return this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [ null, [Validators.required]],
      price: [ null, [Validators.required]],
    })
  }
  
  submit(form) {
    const value = form.value;

    const requestBody = {
      ...value,
    }
    
    this.store.dispatch(ProductsPageActions.createProduct({product: requestBody}));
  }
  
  clear() {
    this.store.dispatch(ProductsPageActions.clearSelectedProduct());
    this.store.dispatch(ProductsPageActions.addProductPageActive({isActive: false}));
    this.router.navigateByUrl('/products');
  } 
}
