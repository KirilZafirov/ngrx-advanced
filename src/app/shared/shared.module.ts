import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { ValidationErrorsPipe } from './pipes/validation-errors.pipe'; 
import { ValidationMessages } from './services/validation-messages.service';
import { CurrencyComponent } from './components/currency/currency.component';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ConfirmDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FormStorageDirective } from './directives/index';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from './material.module';
import { TelInputComponent } from './custom-form/tel-input/tel-input.component';
import { TextInputComponent } from './custom-form/text-input/text-input.component';

const sharedComponents = [
  UserComponent,
  FormStorageDirective,
  ConfirmDialogComponent,
  AutocompleteComponent,
  WithLoadingPipe,
  CurrencyComponent,
  ValidationErrorsPipe,
  TelInputComponent,
  TextInputComponent];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [...sharedComponents],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...sharedComponents
  ],
  providers: [
    ValidationMessages,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
  ],
  entryComponents: [],
})
export class SharedModule { }