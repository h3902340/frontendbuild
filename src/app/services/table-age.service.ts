import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';
import { Observable } from 'rxjs';

export enum Table {
  player_infos = 'player_infos'
}

@Injectable({
  providedIn: 'root'
})
export class TableAgeService {
  private api = "/api/table_age";
  constructor(private httpClient: HttpClient) { }

  public getTableAge(table: Table): Observable<number> {
    let httpParams: HttpParams = new HttpParams()
      .set('tableName', table)
    const options = {
      params: httpParams
    };
    return this.httpClient.get<number>(`${baseUrl}${this.api}`, options);
  }
}
