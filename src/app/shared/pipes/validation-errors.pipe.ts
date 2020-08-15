import { Pipe, PipeTransform } from '@angular/core'; 
import { ValidationMessages } from '../services/validation-messages.service';

@Pipe({
    name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {

    constructor(private validationMessages: ValidationMessages) {

    }
    transform(val , errorKey): string[] {
        if(val){
            const validatorName = Object.keys(val)[0];
            const context = val[validatorName];
            const errorMsg = this.validationMessages.getErrorMessage(validatorName, errorKey, context);
            return [errorMsg]
        } 
        return [];
    }
}
 