import { CURRENCY_TYPE } from './../product-admin-details/product-admin-details.component';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup , Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/state';
import { ProductsPageActions } from '../actions';
import { StorageService } from 'src/app/core/services/storage.service';
import { IndexedDBStorageService } from 'src/app/core/services/indexedDb-storage.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service'; 
import { CustomTelInput } from '../tel-input/tel-input.component';
@Component({
  templateUrl: './add-product.component.html',
  providers: [{ provide: StorageService, useClass: SessionStorageService }],
})
export class AddProductComponent implements OnInit , OnDestroy {
  currencyTypes = CURRENCY_TYPE;
 
  nameConfig = {
    formKey: 'name',
    label: 'Name',
    placeholder: 'Product Name',
    hintLeft:'short name',
    hintRight: true,
    maxLength: 50,
    validators:[Validators.required]
  }

  brandConfig = {
    formKey: 'brand',
    label: 'Brand',
    placeholder: 'Brand',
    hintLeft:'Some Hint',
    hintRight: true,
    maxLength: 9,
    validators:[Validators.required , Validators.minLength(3), Validators.maxLength(9)]
  }
  getTelInput(): CustomTelInput {
    return {
      area: '' ,
      exchange: '' ,
      subscriber: ''
    }
  }
  form: FormGroup = new FormGroup({
    name: new FormControl('' , [Validators.required]),
    brand: new FormControl('' , [...this.brandConfig.validators]),
    description:  new FormControl('' , [Validators.required]),
    price: new FormControl(null , [Validators.required]),
    currencyType: new FormControl(null , [Validators.required]),
    tel: new FormControl(this.getTelInput())
  }); 
  
  constructor(private store: Store<State>,
    private router: Router) { 
     this.store.dispatch(ProductsPageActions.addProductPageActive({isActive: true , productDetailsLoading: true}));
  } 

  ngOnInit(): void {
  }
 
  submit(form) {
    const value = form.value; 
    const requestBody = {
      ...value,
    }
    
    this.store.dispatch(ProductsPageActions.createProduct({product: requestBody}));
  }
  
  clear() { 
    this.store.dispatch(ProductsPageActions.addProductPageActive({isActive: false , productDetailsLoading: false}));
    this.router.navigateByUrl('/products');
  } 

  ngOnDestroy(): void {  
    this.store.dispatch(ProductsPageActions.addProductPageActive({isActive: false , productDetailsLoading: false}));
  }

  resetValue(formKey , value) {
    this.form.patchValue({
      [formKey]:value
    }); 
  }
}
