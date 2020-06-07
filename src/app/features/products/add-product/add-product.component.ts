
import { ProductsService} from '../services/products-data.service';
import { Component } from '@angular/core';
import { take} from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
   
  form: FormGroup;

  constructor(private productsService: ProductsService,
    private formBuilder: FormBuilder) {
     this.form = this.initForm();
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

    return this.productsService.save(requestBody).pipe(
      take(1)
    ).subscribe()
  }
  
  clear() {

  } 
}
