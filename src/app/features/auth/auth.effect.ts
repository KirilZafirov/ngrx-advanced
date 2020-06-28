import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
import { AuthApiActions, AuthUserActions } from './actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private auth: AuthService , private router: Router) { }

    getAuthStatus$ = createEffect(() =>
        this.auth
            .getStatus()
            .pipe(map(userOrNull => AuthApiActions.getAuthStatusSuccess(userOrNull)))
    );


    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthUserActions.login),
            concatMap(action => {
                return this.auth.login(action.username, action.password).pipe(
                    map(user => {
                        this.router.navigateByUrl('');
                        return AuthApiActions.loginSuccess(user)
                    }),
                    catchError(reason => of(AuthApiActions.loginFailure(reason)))
                );
            })
        )
    );

    logout$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthUserActions.logout),
            tap(() => this.auth.logout())
          ),
        { dispatch: false }
      );
}