import { SharedModule } from './../../shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';


@NgModule({
  imports: [
    SharedModule,
    LandingPageRoutingModule,
  ],
  declarations: [LandingPageComponent],
  entryComponents: [],
  providers: []
})
export class LandingPageModule { }

