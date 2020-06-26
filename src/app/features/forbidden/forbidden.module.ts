import { ForbiddenComponent } from './forbidden.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenRoutingModule } from './forbidden-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ForbiddenRoutingModule,
  ],
  declarations: [ForbiddenComponent],
  entryComponents: [],
  providers: []
})
export class ForbiddenModule { }

