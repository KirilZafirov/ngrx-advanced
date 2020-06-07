import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable, throwError, of, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class HandleHttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toaster: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          return throwError(error);
        }
        if(error.status === 404 || error.status === 405) {
          this.toaster.error(error.statusText);
          return throwError(error);
        } 

        if (error.error instanceof Error) {
          // client-side or network error
          const errorToLog = `Http error (client/network). ${error.message}`;
          this.toaster.error(errorToLog);
          // return EMPTY;
          return throwError(error);
        } else if(error.error.title) {
          this.toaster.error(error.error.title);
          return throwError(error);
        }  else {
          // unsuccessful response code
          let multilineError = '';
          if (error.error && error.error.messages) {
            for (let er of error.error.messages) {
              multilineError = `${er.message} \n `;
            }
          } else {
            if (error && error.error) {
              Object.keys(error.error).forEach(key => {
                let splitedKey = '';
                key.split(/(?=[A-Z])/).forEach(item => {
                  if (!splitedKey) {
                    splitedKey = `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
                  } else {
                    splitedKey = `${splitedKey} ${item}`;
                  }
                });
                multilineError = ` ${splitedKey} : ${error.error[key]} \n `;
              });
            }
          }

          this.toaster.error(multilineError);
          // return EMPTY;
          return throwError(error);
        }

        return throwError(error);
      })
    );
  }
}
