

import { SharedModule } from '../../shared/shared.module';
import { NgModule } from "@angular/core";
import { UserSettingsComponent } from "./user-settings.component";
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { RoutedDialogWrapperComponent } from './routed-dialog/routed-dialog-wrapper.component';
import { RoutedDialogComponent } from './routed-dialog/routed-dialog.component';
import { TestComponent } from './routed-dialog/test.component';
@NgModule({
  imports: [
    SharedModule,
    UserSettingsRoutingModule,
  ],
  declarations: [
    UserSettingsComponent,
    RoutedDialogWrapperComponent,
    RoutedDialogComponent,
    TestComponent
  ],
  exports: []
})
export class UserSettingsModule { }
