import { TelInputComponent } from './tel-input/tel-input.component';
import { ProductListGhostComponent } from './product-list-ghost/product-list-ghost.component';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminShellComponent } from './products-admin-shell.component';
import { ProductAdminDetailsComponent } from './product-admin-details/product-admin-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsAdminEffects } from './products-admin-api.effect';
import { ProductsService } from '../services/products-data.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    ProductsAdminRoutingModule,
    EffectsModule.forFeature([ProductsAdminEffects]),
    SharedModule,
  ],
  declarations: [
    ProductsAdminShellComponent , 
    ProductAdminDetailsComponent , 
    AddProductComponent , 
    ProductListComponent , 
    ProductListGhostComponent,
    TelInputComponent
  ],
  entryComponents: [AddProductComponent, TelInputComponent],  
  providers:[ProductsService]
})
export class ProductsAdminModule { }

