import { CustomFormFieldConfig } from 'src/app/shared/custom-form/models/custom-form-field-config.model';
import { Validators } from '@angular/forms';

export const FORM_BRAND_CONFIG : CustomFormFieldConfig = {
    formKey: 'brand',
    label: 'Brand',
    placeholder: 'Brand',
    hintLeft:'Some Hint',
    hintRight: true,
    maxLength: 9,
    validators:[Validators.required , Validators.minLength(3), Validators.maxLength(9)]
  }