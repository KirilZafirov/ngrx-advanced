import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
  preloadingStrategy: QuicklinkStrategy,
  relativeLinkResolution: 'legacy',
};

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products-handler.module').then(
        (m) => m.ProductsHandlerModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./features/details-page/details-page.module').then(
        (m) => m.DetailsPageModule
      ),
    canActivate: [],
  },
  {
    path: '404',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'forbidden',
    loadChildren: () =>
      import('./features/forbidden/forbidden.module').then(
        (m) => m.ForbiddenModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user-settings/user-settings.module').then(
        (m) => m.UserSettingsModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [QuicklinkModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
