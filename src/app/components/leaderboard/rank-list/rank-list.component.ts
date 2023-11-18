import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { Player, PaginatedPlayer } from 'src/app/services/leaderboard';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SseResponse } from 'src/app/services/sse.service';
import { getTimeAgoString } from 'src/app/utility';
import { Table, TableAgeService } from 'src/app/services/table-age.service';

@Component({
  selector: 'app-rank-list',
  styleUrls: ['rank-list.component.css'],
  templateUrl: 'rank-list.component.html'
})

export class RankListComponent implements OnInit, OnChanges {
  @Input() gameMode: number;
  @Input() search: string;
  oldsearch: string = "";
  sortField: string = 'rank';
  sortOrder: string = 'asc';
  showPage: number;
  showPageMax: number;

  public showInactive: boolean = false;
  public displayedColumns: string[] = ['Rank', 'ELO', 'Clan', 'Name', 'Wins', 'Losses', 'Winrate', 'Streak', 'LastMatch'];
  public players: Player[] = [];
  public isLoading = true;

  public get pagePlusOne() {
    return this.page + 1;
  }
  public set pagePlusOne(pagePlusOne: number) {
    this.page = pagePlusOne - 1;
  }

  @Output()
  public onLastUpdateDateChanged = new EventEmitter<{ date: number, dateString: string }>();

  private totalElements: number = 0;
  private page: number = 0;
  private size: number = 25;
  private maxPage: number = 0;

  constructor(private leaderboardService: LeaderboardService, private router: Router, private route: ActivatedRoute, private tableAgeService: TableAgeService) { }

  public ngOnInit(): void {
    this.players = [];
    this.route.queryParams.subscribe(params => {
      let gameMode = params['gameMode'];
      if (gameMode) {
        this.gameMode = params['gameMode'];
        this.getPlayers(this.page, this.size);
      } else {
        this.getPlayers(this.page, this.size);
      }
    });
    this.leaderboardService.getSSE().subscribe({
      next: this.handleResponseSse.bind(this),
      error: this.handleErrorSse.bind(this)
    });
    this.tableAgeService.getTableAge(Table.player_infos).subscribe({
      next: this.handleResponseTableAge.bind(this),
      error: this.handleErrorTableAge.bind(this)
    });
  }

  private handleResponseSse(responseString: MessageEvent<string>): void {
    let response: SseResponse = JSON.parse(responseString.data);
    if (response.label != 'Player') return;
    this.getPlayers(this.page, this.size);
    let lastUpdateDateString = getTimeAgoString(response.date);
    this.onLastUpdateDateChanged.next({
      date: response.date,
      dateString: lastUpdateDateString
    });
  }

  private handleErrorSse(event: Event): void {
    console.error('rank-list, error from SSE: ' + JSON.stringify(event));
  }

  private handleResponseTableAge(response: number): void {
    let lastUpdateDateString = getTimeAgoString(response);
    this.onLastUpdateDateChanged.next({
      date: response,
      dateString: lastUpdateDateString
    });
  }

  private handleErrorTableAge(event: Event): void {
    console.error('rank-list, error from TableAge: ' + JSON.stringify(event));
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['search'] && this.oldsearch != this.search || changes['gameMode']) {
      this.getPlayers(this.page, this.size)
      this.oldsearch = this.search;
      this.page = 0;
    }
  }

  public goToPage() {
    if (!this.page || this.page < 0) {
      this.page = 0;
    } else if (this.page > this.maxPage) {
      this.page = this.maxPage;
    }
    this.getPlayers(this.page, this.size);
  }

  public nextPage() {
    if (this.page == this.maxPage) return;
    this.page++;
    this.getPlayers(this.page, this.size);
  }

  public previousPage() {
    if (this.page == 0) return;
    this.page--;
    this.getPlayers(this.page, this.size);
  }

  public lastPage() {
    this.page = this.maxPage;
    this.getPlayers(this.page, this.size);
  }

  public firstPage() {
    this.page = 0;
    this.getPlayers(this.page, this.size);
  }

  sortData(field: string) {
    // Change sort order if it's already sorting on this field
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Default to ascending sort for new fields
      this.sortOrder = 'asc';
    }
    this.page = 0;
    this.sortField = field;
    this.getPlayers(this.page, this.size);
  }

  private getPlayers(page: number, size: number) {
    let playerName: string = this.search;
    let playerObservable: Observable<PaginatedPlayer>;
    if (this.showInactive) {
      playerObservable = this.leaderboardService.getLeaderboardList(this.gameMode, this.search, page, size, this.sortField, this.sortOrder);
    } else {
      playerObservable = this.leaderboardService.getLeaderboardActiveList(this.gameMode, this.search, page, size, this.sortField, this.sortOrder);
    }

    playerObservable.pipe(
      tap((response: PaginatedPlayer) => {
        if (playerName != this.search) return;
        this.isLoading = false;
        this.players = response.content;

        this.totalElements = response.totalElements;
        this.maxPage = Math.floor(this.totalElements / this.size);
        this.showPage = this.page + 1;
        this.showPageMax = this.maxPage + 1;
      }),
      catchError((error: any) => {
        console.error('Error =  fetching leaderboard data: ', error);
        throw error;
      })
    ).subscribe();
  }

  public toggleInactive(isChecked: boolean): void {
    this.showInactive = isChecked;
    this.getPlayers(this.page, this.size);
  }

  getWinRatio(wins: number, losses: number): string {
    var totalGames = wins + losses;
    totalGames = wins / totalGames;
    totalGames = totalGames * 100;
    return Math.trunc(totalGames).toString();
  }

}