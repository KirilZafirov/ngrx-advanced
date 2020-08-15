import { Validators } from "@angular/forms";

export interface CustomFormFieldConfig {
    formKey?: string;
    label?: string;
    placeholder?: string;
    hintLeft?: string | boolean;
    hintRight?: string | boolean;
    hasClearBtn?: boolean;
    matIconClear?: string;
    maxLength?: number;
    validators?: Validators[];
  }