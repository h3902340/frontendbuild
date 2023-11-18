import { Component, OnInit } from '@angular/core';
import { ObservableResponse, ObservableService } from '../../../services/observable.service';
import { Router } from '@angular/router';
import { getTimeAgoString } from 'src/app/utility';
import { idCivToFlagCircle } from 'src/app/constant';
import { SseResponse } from 'src/app/services/sse.service';

type MatchInfo = {
  idGame: number;
  gameName: string;
  teamList: { [k: number]: PlayerInfo[] };
  playerCount: number,
  isRanked: boolean,
  startDateTimestamp: number,
  startDateString: string
  agoString: string,
  highestElo: number,
  lowestElo: number,
  isDisplayed: boolean,
  gameMode: number
}

type PlayerInfo = {
  name: string,
  eloString: string,
  civFlagUrl: string,
  idPlayer: number,
  idCiv: number,
}

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor(private router: Router, private observableService: ObservableService) { }

  public isLoading: boolean = true;
  public matchArray: MatchInfo[];
  public matchArrayDisplayed: MatchInfo[];
  public matchArrayPaginated: MatchInfo[];
  page: number = 0;
  size: number = 10;
  maxPage: number;
  showPage: number;
  showPageMax: number;
  public gameCount: number;
  public sortByElo: boolean = true;
  private lastUpdateDate: number;
  public lastUpdateDateString: string;
  private readonly minElo = 0;
  private readonly maxElo = 2500;
  private _eloLowerBound: number = this.minElo;
  private _eloUpperBound: number = this.maxElo;
  private timer: number;

  public get eloLowerBound(): number {
    return this._eloLowerBound;
  }

  public set eloLowerBound(lowerBound: number) {
    this._eloLowerBound = lowerBound;
    this.filterMatchArray();
  }

  public get eloUpperBound(): number {
    return this._eloUpperBound;
  }

  public set eloUpperBound(upperBound: number) {
    this._eloUpperBound = upperBound;
    this.filterMatchArray();
  }

  private _selectedGameMode: number = -1;

  public get selectedGameMode(): number {
    return this._selectedGameMode;
  }

  public set selectedGameMode(gameMode: number) {
    this._selectedGameMode = Number(gameMode);
    this.filterMatchArray();
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.matchArray = [];
    this.observableService.getObservableListAll().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
    this.observableService.getObservableListSSE().subscribe({
      next: this.handleResponseSse.bind(this),
      error: this.handleErrorSse.bind(this)
    });
  }

  private handleResponseSse(responseMessage: MessageEvent<string>): void {
    let sseResponse: SseResponse = JSON.parse(responseMessage.data);
    if (sseResponse.label != 'Live') return;
    this.handleResponse(sseResponse.data);
    this.lastUpdateDate = sseResponse.date;
    this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
  }

  private handleResponse(response: ObservableResponse): void {
    if (!response) return;
    this.matchArray = [];
    for (let i = 0; i < response.observableMatchInfo.length; i++) {
      let match = response.observableMatchInfo[i];
      if (!match) continue;
      if (!match.obeservableMatchPlayerInfo) continue;
      let teamList: { [k: number]: PlayerInfo[] } = {}
      let highestElo: number = -1;
      let lowestElo: number = Number.MAX_VALUE;
      for (let j = 0; j < match.obeservableMatchPlayerInfo.length; j++) {
        if (match.obeservableMatchPlayerInfo[j].status == 1) continue;
        let idCiv = match.obeservableMatchPlayerInfo[j].idCiv;
        let civFlagUrl: string
        if (idCiv) {
          civFlagUrl = idCivToFlagCircle(idCiv);
        } else {
          civFlagUrl = '';
        }

        let elo: number = match.obeservableMatchPlayerInfo[j].elo;
        if (elo > highestElo) {
          highestElo = elo;
        }
        if (elo < lowestElo) {
          lowestElo = elo;
        }

        let playerInfo: PlayerInfo;
        if (match.obeservableMatchPlayerInfo[j].status == 2) {
          playerInfo = {
            name: "AI",
            eloString: "",
            civFlagUrl: civFlagUrl,
            idPlayer: -1,
            idCiv: idCiv!
          };
        } else {
          playerInfo = {
            name: match.obeservableMatchPlayerInfo[j].name,
            eloString: (elo == -1 ? "(Not Ranked)" : "(" + elo + ")"),
            civFlagUrl: civFlagUrl,
            idPlayer: match.obeservableMatchPlayerInfo[j].idPlayer,
            idCiv: idCiv!
          };
        }

        let team: number = match.obeservableMatchPlayerInfo[j].team + 1;
        if (!teamList[team]) {
          teamList[team] = [];
        }
        teamList[team].push(playerInfo);
      }

      let startDateTimestamp: number = match.startDate;
      let agoString = getTimeAgoString(startDateTimestamp);

      this.matchArray.push({
        idGame: match.idGame,
        gameName: match.gameName,
        teamList: teamList,
        playerCount: match.playerCount!,
        isRanked: match.idGroup! != 0,
        startDateTimestamp: startDateTimestamp,
        startDateString: new Date(startDateTimestamp).toLocaleString(),
        agoString: agoString,
        highestElo: highestElo,
        lowestElo: lowestElo,
        isDisplayed: true,
        gameMode: match.gameMode!
      })
    }
    this.lastUpdateDate = response.lastUpdateDate;
    this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
    window.clearInterval(this.timer);
    this.timer = window.setInterval(this.updateTimer.bind(this), 1000);
    this.filterMatchArray();
    this.isLoading = false;
  }

  private updateTimer(): void {
    this.lastUpdateDate += 1;
    this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
  }

  private handleErrorSse(error: Event): void {
    console.error('receive sse error, trying to reconnect: ' + JSON.stringify(error));
  }

  private handleError(error: Error): void {
    console.error(error);
  }

  public toggleSortByElo(isChecked: boolean): void {
    this.sortByElo = isChecked;
    this.filterMatchArray();
  }


  private filterMatchArray(): void {
    this.page = 0;
    if (this.sortByElo) {
      this.matchArray.sort(function (a, b) {
        return b.highestElo - a.highestElo;
      });
    } else {
      this.matchArray.sort(function (a, b) {
        return b.startDateTimestamp - a.startDateTimestamp;
      });
    }
    this.gameCount = 0;
    for (let i = 0; i < this.matchArray.length; i++) {
      let match = this.matchArray[i];
      let isDisplayed: boolean = false;
      switch (this._selectedGameMode) {
        case -1:
          isDisplayed = true;
          break;
        case 0:
          if (match.gameMode == 0) isDisplayed = true;
          break;
        case 1:
          if (match.gameMode == 1) isDisplayed = true;
          break;
        case 2:
          if (match.gameMode == 2 || match.gameMode == 3 || match.gameMode == 4) isDisplayed = true;
          break;
        case 3:
          if (match.gameMode == 5 || match.gameMode == 6 || match.gameMode == 7 || match.gameMode == 8) isDisplayed = true;
          break;
        case 4:
          if (match.gameMode == 9 || match.gameMode == 10 || match.gameMode == 11 || match.gameMode == 12 ||
            match.gameMode == 14 || match.gameMode == 15 || match.gameMode == 16 || match.gameMode == 17) isDisplayed = true;
          break;
        case 5:
          if (match.gameMode == 18) isDisplayed = true;
          break;
        case 6:
          if (match.gameMode == 19 || match.gameMode == 20 || match.gameMode == 21) isDisplayed = true;
          break;
      }

      if (this.eloLowerBound > this.minElo) {
        if (match.lowestElo < this.eloLowerBound) {
          isDisplayed = false;
        }
      }
      if (this.eloUpperBound < this.maxElo) {
        if (match.highestElo > this.eloUpperBound) {
          isDisplayed = false;
        }
      }

      match.isDisplayed = isDisplayed;
      if (isDisplayed) {
        this.gameCount++;
      }
    }
    this.matchArrayDisplayed = this.matchArray.filter(match => match.isDisplayed);
    this.updatePagination();
  }

  public gameModeToName: { [k: number]: string } = {
    0: "Unrated",
    1: "1v1 Supremacy",
    2: "2v2 Supremacy",
    3: "3v3 Supremacy",
    4: "4v4 Supremacy",
    5: "1v1 Deathmatch",
    6: "2v2 Deathmatch",
    7: "3v3 Deathmatch",
    8: "4v4 Deathmatch",
    9: "1v1 Treaty (NR40)",
    10: "2v2 Treaty (NR40)",
    11: "3v3 Treaty (NR40)",
    12: "4v4 Treaty (NR40)",
    14: "1v1 Treaty (NR20)",
    15: "2v2 Treaty (NR20)",
    16: "3v3 Treaty (NR20)",
    17: "4v4 Treaty (NR20)",
    18: "1v1 Empire Wars",
    19: "2v2 Empire Wars",
    20: "3v3 Empire Wars",
    21: "4v4 Empire Wars"
  };

  public trackMatch(index: number, match: MatchInfo): boolean {
    return match.isDisplayed;
  }
  updatePagination() {
    const startIndex = this.page * this.size;
    const endIndex = startIndex + this.size;

    this.matchArrayPaginated = this.matchArrayDisplayed.slice(startIndex, endIndex);
    this.maxPage = Math.ceil(this.matchArrayDisplayed.length / this.size) - 1;
    this.showPage = this.page + 1;
    this.showPageMax = this.maxPage + 1;
  }
  public get pagePlusOne() {
    return this.page + 1;
  }
  public set pagePlusOne(pagePlusOne: number) {
    this.page = pagePlusOne - 1;
  }
  public goToPage() {
    if (!this.page || this.page < 0) {
      this.page = 0;
    } else if (this.page > this.maxPage) {
      this.page = this.maxPage;
    }
    this.updatePagination();
  }

  public nextPage() {
    if (this.page == this.maxPage) return;
    this.page++;
    this.updatePagination();;
  }

  public previousPage() {
    if (this.page == 0) return;
    this.page--;
    this.updatePagination();;
  }

  public lastPage() {
    this.page = this.maxPage;
    this.updatePagination();;
  }

  public firstPage() {
    this.page = 0;
    this.updatePagination();;
  }
}
