import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from './../../shared/shared.module';
import { AuthEffects } from './auth.effect';
import { EffectsModule } from '@ngrx/effects';
 
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    SharedModule,
    EffectsModule.forFeature([AuthEffects]),
    AuthRoutingModule,
  ],
  declarations: [LoginFormComponent , LoginPageComponent],
  entryComponents: [],
  providers: []
})
export class AuthModule { }

