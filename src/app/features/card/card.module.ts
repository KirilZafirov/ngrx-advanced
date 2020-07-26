 
  
import { SharedModule } from '../../shared/shared.module'; 
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CardComponent
  ],
  declarations: [
    CardComponent,
  ],
  entryComponents: [],
  providers: []
})
export class AppCardModule { }

