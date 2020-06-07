
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsUserShellComponent } from './products-user-shell.component';


const routes: Routes = [
  { 
    path: '', 
    component: ProductsUserShellComponent
  },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsUserRoutingModule {
}