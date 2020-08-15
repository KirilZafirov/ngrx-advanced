import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl, 
                 form: FormGroupDirective | NgForm | null): boolean {
      return control && 
             control.invalid && 
             (((control.value === null || control.value === '') && control.touched) || 
             (!!control.value && !control.touched))
    }
  
  }