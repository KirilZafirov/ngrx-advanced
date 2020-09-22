 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { RoutedDialogWrapperComponent } from './routed-dialog/routed-dialog-wrapper.component';
import { TestComponent } from './routed-dialog/test.component';
import { UserSettingsComponent } from './user-settings.component';

const routes: Routes = [
  {
    path: '',
    component: UserSettingsComponent,
    children:[
      {
        path: "routed-dialog",
        component: RoutedDialogWrapperComponent,
        children: [
          {
            path: "first",
            component: TestComponent
          },
          {
            path: "second",
            component: TestComponent
          },
          {
            path: "third",
            component: TestComponent
          },
          {
            path: '**',
            redirectTo: 'first'
          }
        ], 
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule {
}