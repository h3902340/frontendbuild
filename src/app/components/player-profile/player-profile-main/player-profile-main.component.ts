import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { SseResponse } from 'src/app/services/sse.service';
import { Table, TableAgeService } from 'src/app/services/table-age.service';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';
import { PlayerMatchsComponent } from '../player-matchs/player-matchs.component';
import { getBrowserLanguage } from 'src/app/utility';
import { StrTableService } from 'src/app/services/string-table.service';

@Component({
  selector: 'app-player-profile-main',
  templateUrl: './player-profile-main.component.html',
  styleUrls: ['./player-profile-main.component.css']
})
export class PlayerProfileMainComponent implements OnInit, OnDestroy {
  public idPlayer: number;
  @ViewChild('profile')
  private profile: PlayerProfileComponent;
  @ViewChild('matchs')
  private matchs: PlayerMatchsComponent;
  private navigationSubscription: Subscription;

  public lastUpdateDate: number;

  constructor(private stringTableService: StrTableService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService, private tableAgeService: TableAgeService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  public async ngOnInit() {
    this.stringTableService.setLanguage(getBrowserLanguage());
    this.route.queryParams.subscribe(params => {
      this.idPlayer = params['idPlayer'];
    });
    this.lastUpdateDate = await firstValueFrom(this.tableAgeService.getTableAge(Table.player_infos));
    this.profileService.getSSE().subscribe({
      next: this.handleResponseSse.bind(this),
      error: this.handleErrorSse.bind(this),
    });
  }

  private handleResponseSse(responseString: MessageEvent<string>): void {
    let response: SseResponse = JSON.parse(responseString.data);
    if (response.label != 'Player') return;
    this.lastUpdateDate = response.date;
  }

  private handleErrorSse(event: Event): void {
    console.error('player-profile-main, error from SSE: ' + JSON.stringify(event));
    this.profileService.getSSE().subscribe({
      next: this.handleResponseSse.bind(this),
      error: this.handleErrorSse.bind(this),
    });
  }

  private initialiseInvites() {
    this.route.queryParams.subscribe(params => {
      this.idPlayer = params['idPlayer'];
    });
  }

  public ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
