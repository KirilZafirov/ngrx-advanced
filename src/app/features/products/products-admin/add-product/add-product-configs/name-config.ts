import { CustomFormFieldConfig } from 'src/app/shared/custom-form/models/custom-form-field-config.model';
import { Validators } from '@angular/forms';

export const FORM_NAME_CONFIG : CustomFormFieldConfig = {
    formKey: 'name',
    label: 'Name',
    placeholder: 'Product Name',
    hintLeft:'short name',
    hintRight: true,
    maxLength: 50,
    validators:[Validators.required]
  }