import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private httpClient: HttpClient) { }

  public getJson<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(path);
  }
}
