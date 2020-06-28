import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from "@angular/router";
import { of as observableOf, Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private auth: AuthService) {}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean { 
        if (childRoute.data['anonymous'] === true) {
          return observableOf(true);
        }
        if (childRoute.data && childRoute.data['authorize'] === true) {
          return this.isAuthenticated(state);
        }   
        return observableOf(true);
      }
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return this.isAuthenticated(state);
      }

      private isAuthenticated(state: RouterStateSnapshot): Observable<boolean> {
          return this.auth.getStatus()
          .pipe(
             map((user) => !!user),
             tap((isAuthenticated) => {   
              if (!isAuthenticated) {
              const query: Params = {};
              if (state.url && state.url !== '/') {
                query['redirectUrl'] = state.url;
              }
              this.router.navigate(['/login'], {
                queryParams: query,
                queryParamsHandling: 'merge',
              });
            }
          })) as Observable<boolean>;
        }
}

