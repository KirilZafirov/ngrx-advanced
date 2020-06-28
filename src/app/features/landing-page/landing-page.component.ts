import { User } from './../../shared/models/user.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from "src/app/shared/state";
import { AuthUserActions } from '../auth/actions';
@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent { 
    user$: Observable<User | null>;

    constructor(private store: Store<State>) {
      this.user$ = store.select(selectAuthUser);
    }

    onLogout() {
      this.store.dispatch(AuthUserActions.logout());
    }
}
