import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from './shared/state';
import { AuthUserActions } from './features/auth/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxr-advanced';
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
