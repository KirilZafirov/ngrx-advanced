
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsAdminShellComponent } from './products-admin-shell.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductAdminDetailsComponent } from './product-admin-details/product-admin-details.component';


const routes: Routes = [
  { 
    path: '', 
    component: ProductsAdminShellComponent,
    children: [
      {
        path:'add-product',
        component: AddProductComponent
      },
      {
        path:':productId',
        component: ProductAdminDetailsComponent
      },
    ]
  },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsAdminRoutingModule {
}