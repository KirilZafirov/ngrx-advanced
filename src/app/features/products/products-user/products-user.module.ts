import { ProductsService } from './../services/products-data.service';
import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProductsUserRoutingModule } from './products-user-routing.module';
 

@NgModule({
  imports: [
    ProductsUserRoutingModule,
    SharedModule,
  ],
  declarations: [],
  entryComponents: [],
  providers:[ProductsService]
})
export class ProductsUserModule { }

