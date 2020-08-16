import { ProductsService } from './../services/products-data.service';
import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProductsUserRoutingModule } from './products-user-routing.module';
import { ProductsUserShellComponent } from './products-user-shell.component';
 

@NgModule({
  imports: [
    ProductsUserRoutingModule,
    SharedModule,
  ],
  declarations: [ProductsUserShellComponent],
  entryComponents: [],
  providers:[ProductsService]
})
export class ProductsUserModule { }

