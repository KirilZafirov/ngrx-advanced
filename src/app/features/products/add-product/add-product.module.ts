import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsService } from '../services/products-data.service';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutingModule } from './add-product-routing.module';
 

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule,
    SharedModule,
  ],
  declarations: [AddProductComponent],
  entryComponents: [],
  providers:[ProductsService]
})
export class AddProductModule { }

