import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { SseService } from './sse.service';

export type LobbyGamePlayer = {
  idPlayer: number;
  stationID: number;
  team: number;
  idCiv: number;
  isReady: number;
  status: number;
  name: string;
  elo: number;
}

export type LobbyResponse = {
  lastUpdateDate: number;
  lobbyGames: LobbyGame[];
}

export type LobbyGame = {
  idGame: number;
  gameName: string;
  idHost: number;
  spectatorMode: number;
  spectatorDelay: number;
  region: string;
  map: string;
  maxPlayer: number;
  gameSpeed: number;
  startingAge: number;
  endingAge: number;
  startingResources: number;
  allowCheat: number;
  treatyTime: number;
  koth: number;
  blockade: number;
  isPasswordProtected: number;
  lobbyGamePlayer: LobbyGamePlayer[];
}

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  constructor(private httpClient: HttpClient, private sseService: SseService, private zone: NgZone) { }

  private api: string = '/api/lobbygamelist';

  public getLobbyGameList(): Observable<LobbyResponse> {
    return this.httpClient.get<LobbyResponse>(`${baseUrl}${this.api}`);
  }

  public getLobbyGameListSSE() {
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
}
