import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('http://api.steampowered.com')) {
      const authToken = this.authService.getToken();
      if (authToken) { 
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`
          }
        });
      }
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
            this.authService.doLogout();
        }
        return throwError(error);
      })
    );
  }
}
