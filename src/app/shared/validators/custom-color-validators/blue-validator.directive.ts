import { Directive } from '@angular/core';
import {
    AbstractControl, NG_VALIDATORS, Validator, ValidatorFn
    } from '@angular/forms'; 
import { ColorValidators } from '../color-validators';
    
    @Directive({
        selector: '[blue]',
        providers: [{
            provide: NG_VALIDATORS,
            useExisting: BlueValidatorDirective,
            multi: true
         }]
    })
    export class BlueValidatorDirective implements Validator {
    
        validate(control: AbstractControl): { [key: string]: any } | null {
            return ColorValidators.blue(control);
        }
    }