import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { Store } from '@ngrx/store';
import { State, selectAuthUser, selectGettingAuthStatus } from './shared/state';
import { AuthUserActions, AuthApiActions } from './features/auth/actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxr-advanced';
  user$: Observable<User | null>; 
  links = [{ path: "/products", icon: "products", label: "Products" }];

  constructor(private store: Store<State> , private router: Router) { 
    const userString = localStorage.getItem("auth");

    if (userString) {
      const user: User = JSON.parse(userString); 
      this.store.dispatch(AuthApiActions.loginSuccess(user)); 
    } 
    this.user$ = store.select(selectAuthUser);
  } 
 
  onLogout(event: boolean) {
    this.store.dispatch(AuthUserActions.logout());
  }

  onLogin(event: boolean) {
    this.router.navigateByUrl('/login');
  }
}
