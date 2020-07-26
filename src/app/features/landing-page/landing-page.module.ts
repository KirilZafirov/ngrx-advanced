import { AppCardModule } from './../card/card.module';
import { LandingPageService } from './services/landing-page.service';
 
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
    AppCardModule
  ],
  declarations: [
    LandingPageComponent,
    ItemCardComponent,
    CardListComponent 
  ],
  entryComponents: [],
  providers: [LandingPageService]
})
export class LandingPageModule { }

