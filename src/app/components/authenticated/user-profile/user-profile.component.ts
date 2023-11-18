import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Player, ProfileData } from 'src/app/services/leaderboard';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/services/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SteamApiService } from 'src/app/services/steam-api.service';
import { isPlatformBrowser } from '@angular/common';

interface PlayerSummary {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
  gameextrainfo: string;
  gameid: string;
  loccountrycode: string;
  locstatecode: string;
  loccityid: number;
}

interface PlayerSummaryResponse {
  response: {
    players: PlayerSummary[];
  };
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  currentUser: User;
  currentPlayer: ProfileData;
  editForm: FormGroup;
  playerSummary: PlayerSummary;

  public isBrowser = isPlatformBrowser(this.platformId);

  twitchPattern: string = '((http|https)://)?(www.)?twitch.tv/.+';
  youtubePattern: string = '((http|https)://)?(www.)?youtube.com/.+';
  liquipediaPattern: string = '((http|https)://)?(www.)?liquipedia.net/ageofempires/.+';
  discordPattern: '((http|https)://)?((www.)?(discordapp.com/users|discord.gg)/.+';

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private steamApiService: SteamApiService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    // Init form
    this.editForm = this.formBuilder.group({

      twitchURL: [
        '',
        Validators.pattern(this.twitchPattern),
      ],
      youtubeURL: [
        '',
        Validators.pattern(this.youtubePattern),
      ],
      liquipediaURL: [
        '',
        Validators.pattern(this.liquipediaPattern),
      ],
      discordURL: [
        '',
        Validators.pattern(this.discordPattern),
      ],
    });
  }

  public ngOnInit() {
    /*
    this.currentPlayer = {
      playerInfos: {
        id: 1,
        idPlayer: 1,
        clan: '',
        name: 'string',
        idSteam: 'string',
        v: 1,
        twr: 1,
        wlr: 1,
        ai: 1,
        ac: 1,
        topCiv1: 1,
        topCiv2: 1,
        topCiv3: 1,
        rateCiv1: 1,
        rateCiv2: 1,
        rateCiv3: 1,
        country: 's',
        twitchURL: 'String',
        youtubeURL: 'String',
        liquipediaURL: 'String',
        discordURL: 'string',
        playerElo: []
      },
      clanInfo: {
        idClan: 1,
        clanAbbreviation: 'string',
        clanFullName: 'string',
        clanDescription: 'string',
        memberCount: 1
      }
    }
    this.playerSummary = {
      steamid: 'string',
      communityvisibilitystate: 1,
      profilestate: 1,
      personaname: 'string',
      profileurl: 'string',
      avatar: 'string',
      avatarmedium: 'string',
      avatarfull: 'string',
      avatarhash: 'string',
      lastlogoff: 1,
      personastate: 1,
      realname: 'string',
      primaryclanid: 'string',
      timecreated: 1,
      personastateflags: 1,
      gameextrainfo: 'string',
      gameid: 'string',
      loccountrycode: 'string',
      locstatecode: 'string',
      loccityid: 1,
    }*/
    //GET USER FROM DATABASE
    this.authService.getUserProfile().subscribe((res) => {
      this.currentUser = res;
      //GET USER INFOS FROM STEAM
      this.steamApiService
        .getPlayerSummaries(this.currentUser.idSteam)
        .subscribe((res: PlayerSummaryResponse) => {
          if (res.response.players.length > 0) {
            this.playerSummary = res.response.players[0];
          } else {
            console.log('No players found');
          }
        });
      //GET USER INFOS FROM DATABASE
      this.profileService
        .getProfileList(this.currentUser.idAge)
        .subscribe((res) => {
          this.currentPlayer = res;
          this.editForm = this.formBuilder.group({
            twitchURL: [
              this.currentPlayer.playerInfos.twitchURL,
              Validators.pattern(this.twitchPattern)
            ],
            youtubeURL: [
              this.currentPlayer.playerInfos.youtubeURL,
              Validators.pattern(this.youtubePattern)
            ],
            liquipediaURL: [
              this.currentPlayer.playerInfos.liquipediaURL,
              Validators.pattern(this.liquipediaPattern)
            ],
            discordURL: [
              this.currentPlayer.playerInfos.discordURL,
              Validators.pattern(this.discordPattern)
            ],
          });
        });
    });
  }

  public onSubmit() {
    if (this.editForm.valid) {
      const updatedPlayer: Player = {
        ...this.currentPlayer.playerInfos,
        twitchURL: this.editForm.value.twitchURL
          ?.replace('http://', '')
          ?.replace('https://', ''),
        youtubeURL: this.editForm.value.youtubeURL
          ?.replace('http://', '')
          ?.replace('https://', ''),
        liquipediaURL: this.editForm.value.liquipediaURL
          ?.replace('http://', '')
          ?.replace('https://', ''),
        discordURL: this.editForm.value.discordURL
          ?.replace('http://', '')
          ?.replace('https://', ''),
      };
      this.profileService.updatePlayer(updatedPlayer).subscribe((res) => {
        this.currentPlayer.playerInfos = res;
        // Check if the returned player is the one we sent
        if (
          res.twitchURL === updatedPlayer.twitchURL &&
          res.youtubeURL === updatedPlayer.youtubeURL &&
          res.liquipediaURL === updatedPlayer.liquipediaURL &&
          res.discordURL === updatedPlayer.discordURL
        ) {
          this.snackBar.open('Profile updated successful!', 'Close', {
            duration: 2000,
          });
        }
      });
    }
  }
  public logout() {
    this.authService.doLogout();
    this.snackBar.open('You have been logged out!', 'Close', {
      duration: 2000,
    });
  }
}