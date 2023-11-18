import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = baseUrl + '/api/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  private loggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, public router: Router) {
    const authToken = localStorage.getItem('access_token');
    this.loggedIn = new BehaviorSubject<boolean>(authToken !== null);
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: User) {
    console.log(user);
    return this.http
      .post<any>(`${this.endpoint}/login`, user, { observe: 'response' }) // Observe the full HttpResponse
      .subscribe((res: HttpResponse<any>) => {
        const token = res.headers.get('Authorization'); // Get the token from the 'Authorization' header
        if (token) {
          localStorage.setItem('access_token', token.replace('Bearer ', ''));
          let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
          let userId = decodedJWT._id;
          this.router.navigate(['userprofile']); // Navigate to user profile after successful login
        }
      });
  }

  getUserId() {
    let Token = localStorage.getItem('access_token');
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.loggedIn.next(false);
      this.router.navigate(['']);
    }
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(token: string) {
    localStorage.setItem('access_token', token);
    this.loggedIn.next(true);
  }

  getUserProfile(): Observable<any> {
    let api = `${this.endpoint}/user-profile`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}