

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/state'; 
import { selectGettingAuthStatus, selectAuthUser, selectAuthError } from './../../../../shared/state/index';
import { LoginEvent } from './../../../../models/login-event.model';
import { User } from './../../../../shared/models/user.model';
import { AuthUserActions } from './../../actions/index';

@Component({
  selector:'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent { 
    
  gettingStatus$: Observable<boolean>;
  user$: Observable<User | null>;
  error$: Observable<string | null>;

  constructor(private store: Store<State>) {
    this.gettingStatus$ = store.select(selectGettingAuthStatus);
    this.user$ = store.select(selectAuthUser);
    this.error$ = store.select(selectAuthError);
  }

  onLogin($event: LoginEvent) {
    this.store.dispatch(
      AuthUserActions.login($event.username, $event.password)
    );
  }
}
