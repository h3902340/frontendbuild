import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player, ProfileData, RatingHistory } from './leaderboard';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { ChartWinrateGlobal, ChartWinrateMatchup } from './charts';

@Injectable({
  providedIn: 'root'
})

export class ChartsService {

  constructor(private httpClient: HttpClient) { }

  ProfileCache$: Observable<Player> | null;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private apiwinrateglobal = "/api/chart/chartwinrateglobal";
  private apiwinrategamecount = "/api/chart/chartwinrategamecount";
  private apiwinratematchup = "/api/chart/chartwinratematchup";

  getWinrateByCivByMatchup(gameMode: number, eloMIn: number, eloMax: number, idPatch: number): Observable<ChartWinrateMatchup[]> {
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode)
      .set('eloMin', eloMIn)
      .set('eloMax', eloMax)
      .set('idPatch', idPatch)
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<ChartWinrateMatchup[]>(baseUrl + this.apiwinratematchup, options);
  }

  getWinrateByCivByElo(gameMode: number, idPatch: number): Observable<ChartWinrateGlobal[]> {
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode)
      .set('idPatch', idPatch)
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<ChartWinrateGlobal[]>(baseUrl + this.apiwinrateglobal, options);
  }

  getWinrateByCivByEloAndElo(gameMode: number, idPatch: number, ratingMin: number, ratingMax: number, idPlayer: number): Observable<ChartWinrateGlobal[]> {
    console.log('getWinrateByCivByEloAndElo')
    let httpParams: HttpParams = new HttpParams()
      .set('gameMode', gameMode)
      .set('idPatch', idPatch)
      .set('ratingMin', ratingMin)
      .set('ratingMax', ratingMax)
      .set('idPlayer', idPlayer)
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<ChartWinrateGlobal[]>(baseUrl + this.apiwinrategamecount, options);
  }

}
