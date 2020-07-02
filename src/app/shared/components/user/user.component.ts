
import { User } from './../../models/user.model';

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent { 

  @Input() user: User | null;

  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() login: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() {
  }

  onLogout() {
    this.logout.emit(true);
  } 
  onLogin() {
    this.login.emit(true);
  }
}
