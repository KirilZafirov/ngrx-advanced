import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductAdminDetailsRoutingModule } from './product-admin-details-routing.module';
import { ProductAdminDetailsComponent } from './product-admin-details.component';
import { ProductsService } from '../services/products-data.service';
 

@NgModule({
  imports: [
    CommonModule,
    ProductAdminDetailsRoutingModule,
    SharedModule,
  ],
  declarations: [ProductAdminDetailsComponent],
  entryComponents: [],
  providers:[ProductsService]
})
export class ProductAdminDetailsModule { }

