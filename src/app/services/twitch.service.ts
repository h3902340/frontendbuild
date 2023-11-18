import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private apiUrl = baseUrl + '/api/getStreams';

  constructor(private http: HttpClient) { }

  getStreams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  }
  