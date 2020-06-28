import { LoginEvent } from './../../../../models/login-event.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent { 
    
  @Output() login = new EventEmitter<LoginEvent>();
  @Input() error: string | null = null;

  formGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  onSubmit() {
    this.login.emit(this.formGroup.value);
  }
}
