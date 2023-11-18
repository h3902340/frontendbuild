import { Component, OnInit } from '@angular/core';
import { LobbyGame, LobbyResponse, LobbyService } from 'src/app/services/lobby.service';
import { Router } from '@angular/router';
import { getTimeAgoString } from 'src/app/utility';
import { idCivToFlagCircle } from 'src/app/constant';
import { SseResponse } from 'src/app/services/sse.service';

type LobbyGameInfo = {
  gameInfo: LobbyGame,
  highestElo: number,
  lowestElo: number
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  constructor(private router: Router, private service: LobbyService) { }

  public isLoading: boolean = true;
  public lastUpdateDate: number;
  public lastUpdateDateString: String;
  public displayedLobbyGameArray: LobbyGameInfo[];
  private lobbyGameArray: LobbyGameInfo[];
  public displayedLobbyGameArrayPaginated: LobbyGameInfo[];
  page: number = 0;
  size: number = 10;
  maxPage: number;
  showPage: number;
  showPageMax: number;

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

  private _selectedGameMode: number = 0;
  public _showOnlySpectatorMode: boolean = false;

  public get selectedGameMode(): number {
    return this._selectedGameMode;
  }

  public set selectedGameMode(gameMode: number) {
    this._selectedGameMode = Number(gameMode);
    this.filterMatchArray();
  }
  public set showOnlySpectatorMode(showOnlySpectatorMode: boolean) {
    this._showOnlySpectatorMode = showOnlySpectatorMode;
    this.filterMatchArray();
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.displayedLobbyGameArray = [];
    this.lobbyGameArray = [];
    this.service.getLobbyGameList().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
    this.service.getLobbyGameListSSE().subscribe({
      next: this.handleResponseSse.bind(this),
      error: this.handleErrorSse.bind(this)
    });
  }

  public IdCivToCivUrl(idCiv: number): string {
    return idCivToFlagCircle(idCiv);
  }

  private handleResponseSse(responseMessage: MessageEvent<string>): void {
    let sseResponse: SseResponse = JSON.parse(responseMessage.data);
    if (sseResponse.label != 'Lobby') return;
    this.handleResponse(sseResponse.data);
    this.lastUpdateDate = sseResponse.date;
    this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
  }

  private handleResponse(response: LobbyResponse): void {
    if (!response) return;
    this.displayedLobbyGameArray = [];
    this.lobbyGameArray = [];
    let lobbyGameArray = response.lobbyGames;
    lobbyGameArray.sort(function (a, b) {
      let aMaxElo = -1;
      for (let i = 0; i < a.lobbyGamePlayer.length; i++) {
        if (a.lobbyGamePlayer[i].elo! > aMaxElo) {
          aMaxElo = a.lobbyGamePlayer[i].elo;
        }
      }
      let bMaxElo = -1;
      for (let i = 0; i < b.lobbyGamePlayer.length; i++) {
        if (b.lobbyGamePlayer[i].elo! > bMaxElo) {
          bMaxElo = b.lobbyGamePlayer[i].elo;
        }
      }
      return bMaxElo - aMaxElo;
    })
    for (let i = 0; i < lobbyGameArray.length; i++) {
      let game = lobbyGameArray[i];
      let highestElo: number = -1;
      let lowestElo: number = Number.MAX_VALUE;
      for (let j = 0; j < game.lobbyGamePlayer.length; j++) {
        if (game.lobbyGamePlayer[j].elo > highestElo) {
          highestElo = game.lobbyGamePlayer[j].elo;
        }
        if (game.lobbyGamePlayer[j].stationID != -1 && game.lobbyGamePlayer[j].status != 2 && game.lobbyGamePlayer[j].elo < lowestElo) {
          lowestElo = game.lobbyGamePlayer[j].elo;
        }
      }
      this.lobbyGameArray.push({
        gameInfo: game,
        highestElo: highestElo,
        lowestElo: lowestElo,
      });
    }
    this.displayedLobbyGameArray = this.lobbyGameArray;
    this.lastUpdateDate = response.lastUpdateDate;
    this.lastUpdateDateString = getTimeAgoString(response.lastUpdateDate);
    window.clearInterval(this.timer);
    this.timer = window.setInterval(this.updateTimer.bind(this), 1000);
    this.updatePagination();
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

  public gameSpeedToName(gameSpeed: number): string {
    switch (gameSpeed) {
      case 0:
        return "Slow";
      case 1:
        return "Medium";
      case 2:
        return "Fast";
      default:
        return "";
    }
  }

  public startingAgeToName(startingAge: number): string {
    switch (startingAge) {
      case 0:
        return "Exploration Age";
      case 1:
        return "Commerce Age";
      case 2:
        return "Fortress Age";
      case 3:
        return "Industrial Age";
      case 4:
        return "Post-Industrial Age";
      case 5:
        return "Imperial Age";
      case 6:
        return "Post-Imperial Age";
      default:
        return "";
    }
  }

  public endingAgeToName(endingAge: number): string {
    switch (endingAge) {
      case 0:
        return "Exploration Age";
      case 1:
        return "Commerce Age";
      case 2:
        return "Fortress Age";
      case 3:
        return "Industrial Age";
      case 4:
        return "Imperial Age";
      default:
        return "";
    }
  }

  public startingResourcesToName(startingResources: number): string {
    switch (startingResources) {
      case 0:
        return "Standard";
      case 1:
        return "Medium";
      case 2:
        return "High";
      case 3:
        return "Ultra";
      case 4:
        return "Infinite";
      case 5:
        return "Random";
      default:
        return "";
    }
  }

  private filterMatchArray(): void {
    let filteredElo = this.lobbyGameArray.filter(item => (this.eloLowerBound == this.minElo || item.lowestElo > this.eloLowerBound) && (this.eloUpperBound == this.maxElo || item.highestElo < this.eloUpperBound))
    switch (this._selectedGameMode) {
      case 0:
        this.displayedLobbyGameArray = filteredElo;
        break;
      case 1:
        this.displayedLobbyGameArray = this.lobbyGameArray.filter(item => item.gameInfo.maxPlayer == 2);
        break;
      case 2:
        this.displayedLobbyGameArray = this.lobbyGameArray.filter(item => item.gameInfo.maxPlayer! > 2);
        break;
      case 3:
        this.displayedLobbyGameArray = this.lobbyGameArray.filter(item => item.gameInfo.treatyTime! > 0);
        break;
      case 4:
        this.displayedLobbyGameArray = this.lobbyGameArray.filter(item => item.gameInfo.koth);
        break;
    }
    if (this._showOnlySpectatorMode) {
      this.displayedLobbyGameArray = this.displayedLobbyGameArray.filter(lobby => lobby.gameInfo.spectatorMode);
    }
    this.page = 0;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = this.page * this.size;
    const endIndex = startIndex + this.size;

    this.displayedLobbyGameArrayPaginated = this.displayedLobbyGameArray.slice(startIndex, endIndex);
    this.maxPage = Math.ceil(this.displayedLobbyGameArray.length / this.size) - 1;
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
