
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsAdminShellComponent } from './products-admin-shell.component';


const routes: Routes = [
  { 
    path: '', 
    component: ProductsAdminShellComponent,
    children: [
      {
        path:'add-product',
        loadChildren: () => import('../add-product/add-product.module').then(m=> m.AddProductModule)
      },
      {
        path:':productId',
        loadChildren: () => import('../product-admin-details/product-admin-details.module').then(m=> m.ProductAdminDetailsModule)
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