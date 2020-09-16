import {AbstractControl, ValidatorFn} from '@angular/forms';

export class ColorValidators {  

static blue(control: AbstractControl): any | null {  
    return ColorValidators.color('blue')(control);  
}  

static red(control: AbstractControl): any | null {
    return ColorValidators.color('red')(control);  
}  

static white(control: AbstractControl): any | null {
    return ColorValidators.color('white')(control);  
}  

static color(colorName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => 
        control.value?.toLowerCase() === colorName 
        ? null : {wrongColor: control.value};
    }
}