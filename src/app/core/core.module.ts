import { ViewService } from './services/view.service';
import { IndexedDBStorageService } from './services/indexedDb-storage.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SessionStorageService } from './services/session-storage.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { SharedModule } from '../shared/shared.module'; 
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';  
import { NotificationService } from './services/notification.service';
import { BaseApiService } from './services/base-api.service';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HandleHttpErrorInterceptor } from './interceptors/handle-http-error.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    AuthGuard,
    NotificationService, 
    BaseApiService, 
    ViewService ,
    AuthService,
    SessionStorageService,
    IndexedDBStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleHttpErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule 
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
