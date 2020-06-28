import { User } from '../../shared/models/user.model'; 

import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from 'src/app/shared/state';
import { AuthUserActions } from '../auth/actions';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent { 
  user$: Observable<User | null>;

  constructor(private store: Store<State> , private router: Router) {
    this.user$ = store.select(selectAuthUser);
  }

  onLogout(event: boolean) {
    this.store.dispatch(AuthUserActions.logout());
  }

  onLogin(event: boolean) {
    this.router.navigateByUrl('/login');
  }
}
