import { Injectable } from '@angular/core';

@Injectable()
export class ValidationMessages {
  getErrorMessage(validatorName: string, fieldName?: string, validatorContext?: any): string {
    let defaultMessages: any = {
      required: (fName: string, context?: any) =>
        fieldName ? `Please enter ${fName}` : `Field required`,
      maxlength: (fName: string, context?: any) => 
      fieldName ? `Exceeded max length for ${fName} - ${context.actualLength}/${context.requiredLength}` : `Exceeded Max Length`,
      minlength: (fName: string, context?: any) =>
      fieldName ? `Min length for ${fName} - ${context.actualLength}/${context.requiredLength}` : `Min length required`,
    };

    return defaultMessages[validatorName](fieldName, validatorContext);
  }
}
