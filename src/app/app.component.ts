import { ViewService } from './core/services/view.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from './shared/state';
import { AuthUserActions, AuthApiActions } from './features/auth/actions';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User | null>;
  links = [
    { path: "/home", icon: "home", label: "Home" },
    { path: "/products", icon: "view_list", label: "Products" },
   
    { path: "/shop", icon: "shop", label: "Shop" }, 
    ];

  constructor(private store: Store<State>, 
    private router: Router ,public viewService: ViewService) {
     
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
