 
import { CardListComponent } from './card-list/card-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { SharedModule } from './../../shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { LandingPageRoutingModule } from './landing-page-routing.module';


@NgModule({
  imports: [
    SharedModule,
    LandingPageRoutingModule,
  ],
  declarations: [
    LandingPageComponent,
    ItemCardComponent,
    CardListComponent 
  ],
  entryComponents: [],
  providers: []
})
export class LandingPageModule { }

