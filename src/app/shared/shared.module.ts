import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ConfirmDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FormStorageDirective } from './directives/index';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';


const sharedComponents = [UserComponent , FormStorageDirective , ConfirmDialogComponent , AutocompleteComponent , WithLoadingPipe];
   

@NgModule({
    imports: [
      CommonModule , 
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule
    ],
    declarations: [  ...sharedComponents ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule, 
      MaterialModule,
      ...sharedComponents
    ],
    providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
      { provide: MAT_DATE_LOCALE,  useValue: 'en-US'}
    ],
    entryComponents: [],
  })
export class SharedModule {}