import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';
import { Patch } from './patch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private apipatch = "/api/patchs";

  getPatchs(): Observable<Patch[]> {
    return this.httpClient.get<Patch[]>(`${baseUrl}${this.apipatch}`);
  }
}
