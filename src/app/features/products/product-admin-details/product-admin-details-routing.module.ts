
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAdminDetailsComponent } from './product-admin-details.component';


const routes: Routes = [
  { 
    path: '', 
    component: ProductAdminDetailsComponent
  },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdminDetailsRoutingModule {
}