import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { avatarIdToUrl, idCivToFlagRectangle } from 'src/app/constant';
import { Player, ProfileData } from 'src/app/services/leaderboard';
import { ProfileService } from 'src/app/services/profile.service';
import { getTimeAgoString } from 'src/app/utility';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit, OnChanges {
  player: Player = {
    id: 0,
    idPlayer: 0,
    clan: '',
    name: '',
    idSteam: '',
    twitchURL: '',
    youtubeURL: '',
    liquipediaURL: '',
    discordURL: '',
    country: '',
    v: -1,
    twr: -1,
    wlr: -1,
    ai: -1,
    ac: -1,
    topCiv1: -1,
    topCiv2: -1,
    topCiv3: -1,
    rateCiv1: -1,
    rateCiv2: -1,
    rateCiv3: -1,
    playerElo: []
  };
  @Input()
  public idPlayer: number;

  @Input()
  public lastUpdateDate: number;
  public lastUpdateDateString: string;
  private timer: number;

  name: string;
  clan: string;
  clanFullName: string;
  // avatarSteam :String;
  Stat1v1rank: number;
  Stat1v1rating: number;
  Stat1v1ratingMax: number;
  Stat1v1wins: number;
  Stat1v1losses: number;
  Stat1v1streak: number;
  Stat1v1streakMax: number;
  civFlagUrl1: string;
  civFlagUrl2: string;
  civFlagUrl3: string;
  public avatarlUrl: string;

  constructor(private profileService: ProfileService) { }

  public async ngOnInit() {
    this.avatarlUrl = "";
    this.profileService.getProfileList(this.idPlayer).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      this.lastUpdateDate += 1;
      this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
    }, 1000);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  private handleResponse(response: ProfileData) {
    this.player = response.playerInfos;

    const sortOrder = [1, 8, 9, 2, 7, 3, 4, 5, 6];

    const sortWeight: { [key: number]: number } = {}; // indicate that keys can be of type 'number'
    sortOrder.forEach((value, index) => {
      sortWeight[value] = index;
    });
    // sort tab
    this.player.playerElo.sort((a, b) => {
      return sortWeight[a.gameMode] - sortWeight[b.gameMode];
    });


    this.name = this.player.name;
    this.clan = this.player.clan;
    if (response.clanInfo) {
      this.clanFullName = response.clanInfo.clanFullName;
    } else {
      this.clanFullName = '';
    }

    if (this.player.topCiv1 && idCivToFlagRectangle(this.player.topCiv1)) {
      this.civFlagUrl1 = idCivToFlagRectangle(this.player.topCiv1);
    }
    if (this.player.topCiv2 && idCivToFlagRectangle(this.player.topCiv2)) {
      this.civFlagUrl2 = idCivToFlagRectangle(this.player.topCiv2);
    }
    if (this.player.topCiv3 && idCivToFlagRectangle(this.player.topCiv3)) {
      this.civFlagUrl3 = idCivToFlagRectangle(this.player.topCiv3);
    }

    this.player.playerElo.forEach((value) => {

      if (value.gameMode == 1) {
        this['Stat1v1rank'] = value.rankActive;
        this['Stat1v1rating'] = value.rating;
        this['Stat1v1ratingMax'] = value.ratingMax;
        this['Stat1v1wins'] = value.wins;
        this['Stat1v1losses'] = value.losses + value.disconnections;
        this['Stat1v1streak'] = value.streak;
        this['Stat1v1streakMax'] = value.streakmax;
      }

    });

    this.avatarlUrl = avatarIdToUrl(this.player.ai, this.player.ac);
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
  onlyGameModeOne(): boolean {
    return this.player.playerElo.every(elo => elo.gameMode === 1);
  }
  existsGameModeOne(): boolean {
    return this.player.playerElo.some(elo => elo.gameMode === 1);
  }

  getWinRatio(wins: number, losses: number): string {
    var totalGames = wins + losses;
    totalGames = wins / totalGames;
    totalGames = totalGames * 100;
    return Math.trunc(totalGames).toString();
  }

  private handleError(error: Error) {
    console.log(error);
  }
}
