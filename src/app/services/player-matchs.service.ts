import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { PaginatedMatch } from './player_match';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerMatchsService {
  constructor(private httpClient: HttpClient, private sseService: SseService, private zone: NgZone) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private api = "/api/games";
  private apiName = "/api/games_name";
  private apiLastUpdate = '/api/matchhistorylastupdatedate';

  public getSSE() {
    return new Observable<MessageEvent<string>>(observer => {
      const eventSource = this.sseService.createConnection();
      eventSource.onmessage = event => {
        this.zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this.zone.run(() => {
          observer.error(error);
        });
      };
    })
  }

  public getMatchHistory(idPlayer: number, gameMode: number, page: number, size: number): Observable<PaginatedMatch> {

    let httpParams: HttpParams = new HttpParams()
      .set('playerId', idPlayer)
      .set('gameMode', gameMode)
      .set('page', page.toString())
      .set('size', size.toString());
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<PaginatedMatch>(baseUrl + this.api, options);
  }

  public getMatchHistoryByName(idPlayer: number, gameMode: number, name: string, page: number, size: number): Observable<PaginatedMatch> {
    let httpParams: HttpParams = new HttpParams()
      .set('playerId', idPlayer)
      .set('gameMode', gameMode)
      .set('name', name)
      .set('page', page.toString())
      .set('size', size.toString());
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<PaginatedMatch>(baseUrl + this.apiName, options);
  }

  public getLastUpdate(): Observable<number> {
    const options = {
      headers: this.headers
    };
    return this.httpClient.get<number>(baseUrl + this.apiLastUpdate, options);
  }
}
 