import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';



const routerOptions: ExtraOptions = {
  // enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
};

const routes: Routes = [
    {
      path: 'products',
      loadChildren: () => import('./features/products/products-handler.module').then(m => m.ProductsHandlerModule),
    },
    // {
    //   path: 'forbidden',
    //   component:ForbiddenComponent
    // },
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full',
    },
    {
      path: "**",
      pathMatch: "full",
      redirectTo:'/forbidden'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
