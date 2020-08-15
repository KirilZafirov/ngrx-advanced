import { ValidationMessages } from './../../../../shared/services/validation-messages.service';
import { Component, OnInit, Optional, Self, OnDestroy, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { NgControl, ControlValueAccessor, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface CustomFormFieldConfig {
  formKey: string;
  label: string;
  placeholder: string;
  hintLeft: string | boolean;
  hintRight: string | boolean;
  hasClearBtn: boolean;
  matIconClear: string;
  maxLength: string;
  validators: Validators[];
}
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id',
    // '[attr.aria-describedby]': 'describedBy'
  }
})
export class TextInputComponent implements OnInit , ControlValueAccessor , OnDestroy {

  @Input() config: CustomFormFieldConfig;
  @Input() initialValue: any;

  form: FormGroup;
  static nextId = 0;  
  stateChanges = new Subject<void>(); 
  id = `text-input-${TextInputComponent.nextId++}`; 
  onChange = (_: any) => {};
  onTouched = () => {};
  
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.form.disable() : this.form.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string { 
      if (this.form.valid) {
        const {
          value: { brand }
        } = this.form;
        return brand;
      }
    return null;
  }

  set value(brand: string | null) {
    this.updateControlValue(brand || ''); 
  }

  constructor(   private formBuilder: FormBuilder,
                 @Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      [this.config.formKey]: [
        this.initialValue,
        [...this.config.validators],
        this.disabled
      ], 
    });
  }


  resetValue() {
    this.updateControlValue('')
  }

  writeValue(value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  updateControlValue(value) {
    if(this.form){
      this.form.setValue({[this.config.formKey]: value});
       this.stateChanges.next();
    } 
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    // this._focusMonitor.stopMonitoring(this._elementRef);
  }
}
