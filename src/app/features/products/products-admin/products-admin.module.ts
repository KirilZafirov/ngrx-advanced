import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminShellComponent } from './products-admin-shell.component';
import { ProductsService } from '../services/products-data.service';
 

@NgModule({
  imports: [
    CommonModule,
    ProductsAdminRoutingModule,
    SharedModule,
  ],
  declarations: [ProductsAdminShellComponent],
  entryComponents: [],
  providers:[ProductsService]
})
export class ProductsAdminModule { }

