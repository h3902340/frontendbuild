import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';

export type PlayerCountResponse = {
  response: {
    player_count: number,
    result: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlayerCountService {
  private readonly appid: number = 933110;
  private readonly api: string = '/api/playercount';
  constructor(private httpClient: HttpClient) { }

  public getPlayerCount(): Observable<PlayerCountResponse> {
    let httpParams: HttpParams = new HttpParams()
      .set('appid', this.appid.toString());
    const options = {
      params: httpParams
    };
    return this.httpClient.get<PlayerCountResponse>(baseUrl + this.api, options);
  }
}
