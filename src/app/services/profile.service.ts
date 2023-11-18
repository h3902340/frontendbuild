import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Player, ProfileData, RatingHistory } from './leaderboard';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private sseService: SseService, private zone: NgZone) { }

  ProfileCache$: Observable<Player> | null;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private api = "/api/player/playerprofile";
  private ratinghistoryapi = "/api/ratinghistory";
  private apiupdate = baseUrl + "/api/user/updateprofile";

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

  updatePlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.apiupdate, player);
  }

  getProfileList(idPlayer: number): Observable<ProfileData> {
    let httpParams: HttpParams = new HttpParams()
      .set('idPlayer', idPlayer)
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<ProfileData>(baseUrl + this.api, options);
  }

  getRatingHistory(idPlayer: number): Observable<RatingHistory[]> {
    let httpParams: HttpParams = new HttpParams()
      .set('idPlayer', idPlayer)
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<RatingHistory[]>(baseUrl + this.ratinghistoryapi, options);
  }
}


