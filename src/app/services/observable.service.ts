import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, NgZone } from "@angular/core";
import { SseService } from "./sse.service";
import { baseUrl } from "../baseUrl";

export type ObservableResponse = {
    lastUpdateDate: number;
    observableMatchInfo: ObservableMatchInfo[];
}

export type ObservableMatchPlayerInfo = {
    idPlayer: number;
    idCiv: number;
    team: number;
    status: number;
    name: string;
    elo: number;
}

export type ObservableMatchInfo = {
    idGame: number,
    idGroup: number,
    gameName: string,
    idHost: number,
    playerCount: number,
    startDate: number,
    region: string,
    gameMode: number,
    obeservableMatchPlayerInfo: ObservableMatchPlayerInfo[];
}

@Injectable({
    providedIn: 'root'
})
export class ObservableService {
    constructor(private httpClient: HttpClient, private sseService: SseService, private zone: NgZone) { }

    private apiHttp: string = '/api/observablelist_all';

    public getObservableListSSE() {
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

    public getObservableListAll(): Observable<ObservableResponse> {
        return this.httpClient.get<ObservableResponse>(`${baseUrl}${this.apiHttp}`);

    }
}