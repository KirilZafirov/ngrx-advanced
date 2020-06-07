import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: configProductsHandlerRoutes,
      deps: [],
      multi: true
    }
  ]
})


export class ProductsHandlerModule {}

export function configProductsHandlerRoutes(): Routes {
    // fund-houses
    const adminRoutes  =  [{
            path: '',
            loadChildren: () => import('./products-admin/products-admin.module').then(m => m.ProductsAdminModule)
          }];
      
      // clients
    const clientRoutes = [{ 
            path: '',
            loadChildren: () => import('./products-user/products-user.module').then(m => m.ProductsUserModule)
          }];

  const isAdmin = true;
  return isAdmin ? adminRoutes : clientRoutes;
}

