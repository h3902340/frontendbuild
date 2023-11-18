import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PlayerMatchsService } from 'src/app/services/player-matchs.service';
import { idCivToFlagCircle, idCivToPathName } from 'src/app/constant';
import { MatchInfo, PaginatedMatch } from 'src/app/services/player_match';
import { Observable } from 'rxjs';
import { JsonService } from 'src/app/services/json.service';
import {
  getBrowserLanguage,
  getMapName,
  getTimeAgoString,
  getUnknownMapPath,
  importMapInfos,
  mapIdToPath,
} from 'src/app/utility';
import { MapInfo } from 'src/app/types/maps';
import { StrTableService } from 'src/app/services/string-table.service';

export interface Match {
  MapName: string;
  MapUrl: string;
  StartDate: Date;
  EndDate: Date;
  Length: String;
  PlayerList: PlayerInfo[];
  OpponentList: PlayerInfo[];
  playerCount: number;
  isWin: boolean;
  isRanked: boolean;
  hidden: boolean;
  gameMode: number;
}

export interface PlayerInfo {
  playerName: string;
  idPlayer: number;
  civName: string;
  civFlagUrl: string;
  elo: number | null | undefined;
  eloDiff: number;
  isThisPlayer: boolean;
  isHigestScore: boolean;
  isLeastResources: boolean;
  isMostImprovements: boolean;
  isMostKills: boolean;
  isMostLosses: boolean;
  isMostMilitary: boolean;
  isMostResources: boolean;
  isMostTreasures: boolean;
  scoreEconomic: number;
  scoreMilitary: number;
  scoreTotal: number;
  buildingLost: number;
  buildingRazed: number;
  unitsConverted: number;
  unitsKilled: number;
  unitsLost: number;
}

@Component({
  selector: 'app-player-matchs',
  templateUrl: './player-matchs.component.html',
  styleUrls: ['./player-matchs.component.css'],
})
export class PlayerMatchsComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = [
    'Date',
    'Player',
    'Map',
    'Opponent',
    'Length',
  ];
  public matchArray: Match[];
  public isLoading: boolean = true;
  public showUnrated: boolean = false;
  public show1v1Ranked: boolean = true;
  public showTeamGameRanked: boolean = true;
  private maxPage: number = 0;
  private totalElements: number = 0;
  private page: number = 0;
  private size: number = 10;
  public showPage: number;
  public showPageMax: number;
  private _selectedValue: number = 0;
  private mapInfos: { [k: string]: MapInfo };
  @Input()
  public lastUpdateDate: number;
  public lastUpdateDateString: String;
  private timer: number;

  public isHigestScoreTip: string;
  public isLeastResourcesTip: string;
  public isMostImprovementsTip: string;
  public isMostKillsTip: string;
  public isMostLossesTip: string;
  public isMostMilitaryTip: string;
  public isMostResourcesTip: string;
  public isMostTreasuresTip: string;
  public scoreEconomicText: string;
  public scoreMilitaryText: string;
  public scoreTotalText: string;
  public buildingLostText: string;
  public buildingRazedText: string;
  public unitsConvertedText: string;
  public unitsKilledText: string;
  public unitsLostText: string;
  public trophyText: string;
  public playerNameText: string;
  public moreText: string;
  public timeText: string;
  public alliesText: string;
  public mapText: string;
  public opponentText: string;
  public durationText: string;

  constructor(
    private stringTableService: StrTableService,
    private playerMatchsService: PlayerMatchsService,
    private jsonService: JsonService
  ) {}

  @Input() idPlayer: number;
  public async ngOnInit() {
    this.isLoading = true;
    this.mapInfos = await importMapInfos(this.jsonService);
    this.stringTableService.setLanguage(getBrowserLanguage());
    this.getMatchs(this.page, this.size);
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      this.lastUpdateDate += 1;
      this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
    }, 1000);
    let idStrings: number[] = [
      32710, 31560, 31389, 31395, 31457, 31394, 31559, 31558, 36490, 36491,
      19060, 19070, 19068, 49322, 19067, 19069, 42314, 21255, 19830, 20513,
      70752, 30078, 19103, 20510,
    ];
    let localizedStrings = await this.stringTableService.getLocalizedStrings(
      idStrings
    );
    this.isHigestScoreTip = localizedStrings[32710];
    this.isLeastResourcesTip = localizedStrings[31560];
    this.isMostImprovementsTip = localizedStrings[31389];
    this.isMostKillsTip = localizedStrings[31395];
    this.isMostLossesTip = localizedStrings[31457];
    this.isMostMilitaryTip = localizedStrings[31394];
    this.isMostResourcesTip = localizedStrings[31559];
    this.isMostTreasuresTip = localizedStrings[31558];
    this.scoreEconomicText = localizedStrings[36490];
    this.scoreMilitaryText = localizedStrings[36491];
    this.scoreTotalText = localizedStrings[19060];
    this.buildingLostText = localizedStrings[19070];
    this.buildingRazedText = localizedStrings[19068];
    this.unitsConvertedText = localizedStrings[49322];
    this.unitsKilledText = localizedStrings[19067];
    this.unitsLostText = localizedStrings[19069];
    this.trophyText = localizedStrings[42314];
    this.playerNameText = localizedStrings[21255];
    this.moreText = localizedStrings[19830];
    this.timeText = localizedStrings[20513];
    this.alliesText = localizedStrings[70752];
    this.mapText = localizedStrings[30078];
    this.opponentText = localizedStrings[19103];
    this.durationText = localizedStrings[20510];
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoading) return;
    this.ngOnInit();
  }

  private getMatchs(page: number, size: number, name: string | null = null) {
    let matchObservable: Observable<PaginatedMatch>;
    if (name) {
      matchObservable = this.playerMatchsService.getMatchHistoryByName(
        this.idPlayer,
        this._selectedValue,
        name,
        page,
        size
      );
    } else {
      matchObservable = this.playerMatchsService.getMatchHistory(
        this.idPlayer,
        this._selectedValue,
        page,
        size
      );
    }
    matchObservable.subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private async handleResponse(response: PaginatedMatch) {
    this.isLoading = false;

    this.totalElements = response.totalElements;
    this.maxPage = Math.floor(this.totalElements / this.size);
    this.showPage = this.page + 1;
    this.showPageMax = this.maxPage + 1;
    this.matchArray = [];
    this.isLoading = false;
    let matchRecord: MatchInfo[] = response.content;

    for (let i = 0; i < matchRecord.length; i++) {
      let match: MatchInfo = matchRecord[i];

      let playerList: PlayerInfo[] = [];
      let opponentList: PlayerInfo[] = [];
      if (!match.matchPlayerInfo) continue;
      if (!match.playerCount) continue;

      let playerTeam: number | null | undefined;
      for (let j = 0; j < match.matchPlayerInfo.length; j++) {
        if (match.matchPlayerInfo[j].idPlayer == this.idPlayer) {
          playerTeam = match.matchPlayerInfo[j].team;
          break;
        }
      }

      if (playerTeam == null) continue;

      let thisPlayerInfo = null;
      let isWin: boolean = false;

      for (let j = 0; j < match.matchPlayerInfo.length; j++) {
        let matchPlayer = match.matchPlayerInfo[j];
        let civName: string;
        let civId: number | null | undefined = matchPlayer.idCiv;
        let playerName: string = matchPlayer.playerName + '';
        let civFlagUrl: string = '';
        if (civId) {
          if (idCivToPathName(civId)) {
            civName = idCivToPathName(civId);
            civFlagUrl += idCivToFlagCircle(civId);
          } else {
            civName = 'CivId: ' + civId;
            civFlagUrl += 'flag_hc_random.png';
            playerName += ' [' + civName + ']';
          }
        } else {
          civName = 'Unknown';
          civId = -1;
        }

        let isThisPlayer: boolean = matchPlayer.idPlayer == this.idPlayer;
        if (isThisPlayer) {
          thisPlayerInfo = matchPlayer;
        }
        let eloDiff = matchPlayer.eloAfter - matchPlayer.eloBefore;
        let player: PlayerInfo = {
          playerName: playerName,
          idPlayer: matchPlayer.idPlayer,
          civName: civName,
          civFlagUrl: civFlagUrl,
          elo: matchPlayer.eloBefore,
          eloDiff: eloDiff,
          isThisPlayer: isThisPlayer,
          isHigestScore: matchPlayer.isHigestScore == 1,
          isLeastResources: matchPlayer.isLeastResources == 1,
          isMostImprovements: matchPlayer.isMostImprovements == 1,
          isMostKills: matchPlayer.isMostKills == 1,
          isMostLosses: matchPlayer.isMostLosses == 1,
          isMostMilitary: matchPlayer.isMostMilitary == 1,
          isMostResources: matchPlayer.isMostResources == 1,
          isMostTreasures: matchPlayer.isMostTreasures == 1,
          scoreEconomic: matchPlayer.scoreEconomic,
          scoreMilitary: matchPlayer.scoreMilitary,
          scoreTotal: matchPlayer.scoreTotal,
          buildingLost: matchPlayer.buildingLost,
          buildingRazed: matchPlayer.buildingRazed,
          unitsConverted: matchPlayer.unitsConverted,
          unitsKilled: matchPlayer.unitsKilled,
          unitsLost: matchPlayer.unitsLost,
        };

        if (matchPlayer.team == playerTeam) {
          playerList.push(player);
        } else {
          opponentList.push(player);
        }
      }

      let mapName: string;
      let mapUrl: string;
      if (match.idMap) {
        if (mapIdToPath(this.mapInfos, match.idMap)) {
          mapName = await getMapName(this.stringTableService, this.mapInfos, match.idMap);
          mapUrl = mapIdToPath(this.mapInfos, match.idMap);
        } else {
          if (match.idMap == -1) {
            mapName = '';
          } else {
            mapName = 'MapId: ' + match.idMap;
          }
          mapUrl = getUnknownMapPath(this.mapInfos);
        }
      } else {
        mapName = await getMapName(this.stringTableService, this.mapInfos, 43);
        match.idMap = 0;
        mapUrl = getUnknownMapPath(this.mapInfos);
      }

      isWin = thisPlayerInfo?.result == 1;

      let startDate = new Date(match.startDate);
      let endDate = new Date(match.endDate);

      let isRanked: boolean;
      if (match.isRanked) {
        isRanked = match.isRanked;
      } else {
        isRanked = false;
      }

      let durationDisplay: string;
      let durationMinutes: number;

      durationMinutes = Math.floor(match.gameLength / 60);

      if (durationMinutes == 0) {
        durationDisplay = `${match.gameLength % 60}s`;
      } else {
        let durationHour = Math.floor(durationMinutes / 60);

        if (durationHour == 0) {
          durationDisplay = `${durationMinutes}m`;
        } else {
          durationDisplay = `${durationHour}h ${durationMinutes}m`;
        }
      }

      this.matchArray.push({
        MapName: mapName,
        MapUrl: mapUrl,
        StartDate: startDate,
        EndDate: endDate,
        Length: durationDisplay,
        PlayerList: playerList,
        OpponentList: opponentList,
        playerCount: match.playerCount,
        isWin: isWin,
        isRanked: isRanked,
        hidden: false,
        gameMode: match.gameMode,
      });
    }
  }

  private handleError(error: any): void {
    console.error('Error fetching leaderboard data: ', error);
  }

  public goToPage() {
    if (!this.page || this.page < 0) {
      this.page = 0;
    } else if (this.page > this.maxPage) {
      this.page = this.maxPage;
    }
    this.getMatchs(this.page, this.size);
  }

  public nextPage() {
    if (this.page == this.maxPage) return;
    this.page++;
    this.getMatchs(this.page, this.size);
  }

  public previousPage() {
    if (this.page == 0) return;
    this.page--;
    this.getMatchs(this.page, this.size);
  }

  public lastPage() {
    this.page = this.maxPage;
    this.getMatchs(this.page, this.size);
  }

  public firstPage() {
    this.page = 0;
    this.getMatchs(this.page, this.size);
  }

  public get pagePlusOne() {
    return this.page + 1;
  }

  public set pagePlusOne(pagePlusOne: number) {
    this.page = pagePlusOne - 1;
  }

  //GameMode selector
  get selectedValue(): number {
    return this._selectedValue;
  }

  set selectedValue(value: number) {
    this._selectedValue = value;
    this.page = 0;
    this.getMatchs(this.page, this.size);
  }
  
  public isDetailExpanded: boolean = false;

  public showHideRow(index: number) {
    let hiddenRow = document.getElementById('hidden_row' + index);
    let expandIcon = document.getElementById('expand' + index);
    if (this.isDetailExpanded) {
      hiddenRow!.style.maxHeight = '0';
      expandIcon?.classList.remove('expand-icon-rotate');
    } else {
      hiddenRow!.style.maxHeight = '1000';
      expandIcon?.classList.add('expand-icon-rotate');
    }
    this.isDetailExpanded = !this.isDetailExpanded;
  }

  getGameMode(gameMode: number): string {
    switch (gameMode) {
      case 1:
        return 'Solo';
      case 2:
        return 'Team';
      case 3:
        return 'Treaty';
      case 4:
        return 'DM';
      case 5:
        return 'EW Solo';
      case 6:
        return 'EW team';
      case 8:
        return '2v2';
      case 9:
        return '3v3';
      case 7:
        return 'Blitz';
      case 10:
        return '4v4';
      default:
        return '';
    }
  }
}