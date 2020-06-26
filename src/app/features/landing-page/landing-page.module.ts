import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
  ],
  declarations: [LandingPageComponent],
  entryComponents: [],
  providers: []
})
export class LandingPageModule { }

