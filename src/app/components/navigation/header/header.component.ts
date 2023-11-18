import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SteamApiService } from 'src/app/services/steam-api.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from 'src/app/services/user';
import { isPlatformBrowser } from '@angular/common';
import { TwitchService } from 'src/app/services/twitch.service';
import { Observable, interval, startWith, switchMap } from 'rxjs';

interface PlayerSummaryResponse {
  response: {
    players: PlayerSummary[];
  };
}

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
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUser: User;
  isLogged: boolean = false;
  playerSummary: PlayerSummary;
  isLoggedIn$: Observable<boolean>;

  public isBrowser = isPlatformBrowser(this.platformId);

  public homeLink: string = '/';
  menuList = [
    { label: 'Leaderboards', link: '/leaderboards' },
    { label: 'Statistics', link: '/statistics' },
    { label: 'Lobbies', submenu: [{ label: 'Live', link: '/live' }, { label: 'Browse', link: '/browse' }] },
    { label: 'Tools', submenu: [{ label: 'Deck Builder', link: '/deckbuilder' }, { label: 'Replay Parser', link: '/replayparser' }, { label: 'Tierlist', link: '/tierlist' }] },
    { label: 'Resources', submenu: [{ label: 'Maps', link: '/maps' }] },
  ];

  streams: any[] = [];

  ffpIsLive: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private oauthService: OAuthService, private twitchService: TwitchService,
    private steamService: SteamApiService, private authService: AuthService, @Inject(PLATFORM_ID) private platformId: any) {
    this.isLoggedIn$ = this.authService.isLoggedIn; // assuming `isLoggedIn` is an Observable<boolean>

    // this.playerSummary = {
    //   steamid: '1234567890', // Example steamid
    //   communityvisibilitystate: 3, // Example visibility state
    //   profilestate: 1, // Example profile state
    //   personaname: 'JohnDoe', // Example persona name
    //   profileurl: 'https://steamcommunity.com/id/JohnDoe', // Example profile URL
    //   avatar: 'https://example.com/avatar-small.jpg', // Example avatar URL
    //   avatarmedium: 'https://example.com/avatar-medium.jpg', // Example medium avatar URL
    //   avatarfull: 'assets/fish_icon.png', // Example full avatar URL
    //   avatarhash: 'abcdef123456', // Example avatar hash
    //   lastlogoff: 1632854400, // Example last logoff timestamp
    //   personastate: 1, // Example persona state
    //   realname: 'John Doe', // Example real name
    //   primaryclanid: '987654321', // Example primary clan ID
    //   timecreated: 1609459200, // Example account creation timestamp
    //   personastateflags: 0, // Example persona state flags
    //   gameextrainfo: 'Playing Game X', // Example game extra info
    //   gameid: '12345', // Example game ID
    //   loccountrycode: 'US', // Example country code
    //   locstatecode: 'CA', // Example state code
    //   loccityid: 1234 // Example city ID
    // };

    this.isLoggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        this.authService.getUserProfile().subscribe((res) => {
          this.currentUser = res;
          //GET USER INFOS FROM STEAM
          this.steamService.getPlayerSummaries(this.currentUser.idSteam).subscribe((res: PlayerSummaryResponse) => {
            if (res.response.players.length > 0) {
              this.playerSummary = res.response.players[0];
            } else {
              console.log('No players found');
            }
          });
        });
      }
    });
  }

  ngOnInit(): void {
    interval(60000) // emit value every 60 seconds
      .pipe(
        startWith(0), // start immediately
        switchMap(() => this.twitchService.getStreams()) // switch to new observable on every emit
      )
      .subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleResponse(response: any[]) {
    this.streams = response.map((stream) => ({ ...stream }));
    this.ffpIsLive = this.streams.some((stream) => stream.user_name === 'FreeFoodParty');
  }

  private handleError(error: Error) {
    console.log(error);
  }

  login() {
    this.steamService.login();
  }

  logout() {
    this.authService.doLogout();
  }

  profile() {
    this.router.navigate(['userprofile']);
  }
}