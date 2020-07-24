 
  
import { SharedModule } from '../../shared/shared.module'; 
import { NgModule } from '@angular/core'; 
import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';


@NgModule({
  imports: [
    SharedModule,
    DetailsPageRoutingModule,
  ],
  declarations: [
    DetailsPageComponent,
  ],
  entryComponents: [],
  providers: []
})
export class DetailsPageModule { }

