import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedPlayer } from './leaderboard';
import { baseUrl } from '../baseUrl';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  http: any;

  constructor(private httpClient: HttpClient, private sseService: SseService, private zone: NgZone) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private apiPlayers = "/api/player/playerlist";
  private apiPlayersActive = "/api/player/playerlistactive";
  private apiPlayersNameLike = "/api/player/playerautocomplete";
  private apileaderboardStats = "/api/player/leaderboardstats";

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

  public getLeaderboardList(gameMode: number, search: string, page: number, size: number, sortField: string, sortOrder: string): Observable<PaginatedPlayer> {
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode.toString())
      .set('search', search)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortField', sortField)
      .set('sortOrder', sortOrder);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<PaginatedPlayer>(baseUrl + this.apiPlayers, options);
  }

  public getLeaderboardActiveList(gameMode: number, search: string, page: number, size: number, sortField: string, sortOrder: string): Observable<PaginatedPlayer> {
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode.toString())
      .set('search', search)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('orderBy', sortField)
      .set('direction', sortOrder);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<PaginatedPlayer>(baseUrl + this.apiPlayersActive, options);
  }

  public getPlayerNameLikeList(name: string): Observable<PaginatedPlayer> {
    let httpParams: HttpParams = new HttpParams()
      .set('name', name.toString());
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<PaginatedPlayer>(baseUrl + this.apiPlayersNameLike, options);
  }

  public getLeaderboardStats(gameMode: number,): Observable<any[]> {
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode.toString());
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<any[]>(baseUrl + this.apileaderboardStats, options);
  }
}
