import { SharedModule } from './../../shared/shared.module';
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
