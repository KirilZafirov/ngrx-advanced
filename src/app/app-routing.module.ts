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
    {
      path: '404',
      loadChildren:() =>import('./features/not-found/not-found.module').then(m => m.NotFoundModule) ,
    },
    {
      path: 'forbidden',
      loadChildren:() =>import('./features/forbidden/forbidden.module').then(m => m.ForbiddenModule) ,
    },
    {
      path: '',
      loadChildren:() =>import('./features/landing-page/landing-page.module').then(m => m.LandingPageModule) ,
      pathMatch: 'full',
    },
    {
      path: "**",
      pathMatch: "full",
      redirectTo:'/404'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
