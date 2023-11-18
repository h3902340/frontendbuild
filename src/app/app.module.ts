import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LeaderboardComponent } from './components/leaderboard/leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { ContentComponent } from './components/navigation/content/content.component';
import { SearchbarComponent } from './components/leaderboard/searchbar/searchbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimeAgoPipe } from 'src/app/pipe/TimeAgoPipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClanFormatPipe } from 'src/app/pipe/ClanFormatPipe';
import { RankFormatPipe } from 'src/app/pipe/RankFormatPipe';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowUpRight, heroArrowDownRight, heroUser } from '@ng-icons/heroicons/outline';
import { heroUserSolid } from '@ng-icons/heroicons/solid';
import { bootstrapDice5 } from '@ng-icons/bootstrap-icons';
import { bootstrapBoxArrowUpRight } from '@ng-icons/bootstrap-icons';
import { BoxLeaderboardStatsComponent } from './components/leaderboard/box-leaderboard-stats/box-leaderboard-stats.component';
import { MatCardModule } from '@angular/material/card';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SteamApiService } from './services/steam-api.service';
import { UserProfileComponent } from './components/authenticated/user-profile/user-profile.component';
import { TokenHandlerComponent } from './components/authenticated/token-handler/token-handler.component';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { LiveComponent } from './components/Lobbies/live/live.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeYoutubeListComponent } from './components/home-page/home-youtube-list/home-youtube-list.component';
import { HomeTwitchLiveComponent } from './components/home-page/home-twitch-live/home-twitch-live.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeTwitchVideoComponent } from './components/home-page/home-twitch-video/home-twitch-video.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile/player-profile.component';
import { PlayerMatchsComponent } from './components/player-profile/player-matchs/player-matchs.component';
import { MatchHistoryPlayerComponent } from './components/player-profile/player-matchs/match-history-player/match-history-player.component';
import { MatchHistoryOpponentComponent } from './components/player-profile/player-matchs/match-history-opponent/match-history-opponent.component';
import { PlayerProfileMainComponent } from './components/player-profile/player-profile-main/player-profile-main.component';
import { RatingHistoryComponent } from './components/player-profile/rating-history/rating-history.component';
import { RankListComponent } from './components/leaderboard/rank-list/rank-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FloorPipe } from './pipe/FloorPipe';
import { TierListComponent } from './components/tier-list/tier-list.component';
import { NgxCaptureModule } from 'ngx-capture';
import { MatSliderModule } from '@angular/material/slider';
import { BrowseComponent } from './components/Lobbies/browse/browse.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { WinrateByCivByEloComponent } from './components/charts/winrate-by-civ-by-elo/winrate-by-civ-by-elo.component';
import { WinrateByMatchupComponent } from './components/charts/winrate-by-matchup/winrate-by-matchup.component';
import { DeckBuilderComponent } from './components/tools/deck-builder/deck-builder.component';
import { MatSelectModule } from '@angular/material/select';
import { DeckBuilderCardComponent } from './components/tools/deck-builder-card/deck-builder-card.component';
import { MapComponent } from './components/map/map.component';
import { MatRadioModule } from '@angular/material/radio';
import { WinrateAndGameCountComponent } from './components/charts/winrate-and-game-count/winrate-and-game-count.component';
import { PlayerCountComponent } from './components/leaderboard/player-count/player-count.component';
import { ChartsMainComponent } from './components/charts/charts-main/charts-main.component';
import { GuideComponent } from './components/guide/guide.component';
import { EditorComponent } from './components/editable/editor/editor.component';
import { AgeUpOptionComponent } from './components/tools/age-up-option/age-up-option.component';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddButtonDialogComponent } from './components/editable/add-button-dialog/add-button-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeckBuilderSearchComponent } from './components/tools/deck-builder-search/deck-builder-search.component';
import { QuillModule } from 'ngx-quill';
import { DeleteDialogComponent } from './components/editable/delete-dialog/delete-dialog.component';
import { UnitEntryComponent } from './components/unit/unit-entry/unit-entry.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { UnitViewerComponent } from './components/unit/unit-viewer/unit-viewer.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { HomeUpdateComponent } from './components/home-page/home-update/home-update.component';
import { HomeInfoBannerComponent } from './components/home-page/home-info-banner/home-info-banner.component';
import { HomeEventsComponent } from './components/home-page/home-events/home-events.component';
import { HomeHallFameComponent } from './components/home-page/home-hall-fame/home-hall-fame.component';
import { ScreenSizeService } from './services/screen-size.service';
import { UnitComponent } from './components/unit/unit.component';
import { YoutubeEmbedComponent } from './components/youtube-embed/youtube-embed.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { AboutComponent } from './components/about/about.component';
import { VisionComponent } from './components/about/vision/vision.component';
import { MissionComponent } from './components/about/mission/mission.component';
import { StrategyComponent } from './components/about/strategy/strategy.component';
import { RoadmapComponent } from './components/about/roadmap/roadmap.component';
import { HomeCivPoolComponent } from './components/home-page/home-info-banner/home-civ-pool/home-civ-pool.component';
import { HomePlayersOnlineComponent } from './components/home-page/home-info-banner/home-players-online/home-players-online.component';
import { ReplayParserComponent } from './components/replay-parser/replay-parser.component';

const dbConfig: DBConfig = {
  name: 'IndexedDB_v2',
  version: 11,
  objectStoresMeta: [{
    store: 'string_table',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'symbol', keypath: 'symbol', options: { unique: false } },
      { name: 'version', keypath: 'version', options: { unique: false } },
      { name: 'english', keypath: 'english', options: { unique: false } },
      { name: 'french', keypath: 'french', options: { unique: false } },
      { name: 'german', keypath: 'german', options: { unique: false } },
      { name: 'hindi', keypath: 'hindi', options: { unique: false } },
      { name: 'italian', keypath: 'italian', options: { unique: false } },
      { name: 'japanese', keypath: 'japanese', options: { unique: false } },
      { name: 'korean', keypath: 'korean', options: { unique: false } },
      { name: 'malay', keypath: 'malay', options: { unique: false } },
      { name: 'portugueseBrazil', keypath: 'portugueseBrazil', options: { unique: false } },
      { name: 'russian', keypath: 'russian', options: { unique: false } },
      { name: 'simplifiedChinese', keypath: 'simplifiedChinese', options: { unique: false } },
      { name: 'spanish', keypath: 'spanish', options: { unique: false } },
      { name: 'traditionalChinese', keypath: 'traditionalChinese', options: { unique: false } },
      { name: 'turkish', keypath: 'turkish', options: { unique: false } },
      { name: 'vietnamese', keypath: 'vietnamese', options: { unique: false } },
    ]
  }, {
    store: 'tech_tree',
    storeConfig: { keyPath: 'name', autoIncrement: false },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: true } },
      { name: 'data', keypath: 'data', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileComponent,
    PlayerMatchsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SearchbarComponent,
    LeaderboardComponent,
    TimeAgoPipe,
    ClanFormatPipe,
    RankFormatPipe,
    FloorPipe,
    SafeUrlPipe,
    MatchHistoryPlayerComponent,
    MatchHistoryOpponentComponent,
    BoxLeaderboardStatsComponent,
    UserProfileComponent,
    TokenHandlerComponent,
    LiveComponent,
    HomeYoutubeListComponent,
    HomeTwitchVideoComponent,
    HomeTwitchLiveComponent,
    PlayerProfileMainComponent,
    RatingHistoryComponent,
    RankListComponent,
    TierListComponent,
    BrowseComponent,
    WinrateByCivByEloComponent,
    WinrateByMatchupComponent,
    DeckBuilderComponent,
    DeckBuilderCardComponent,
    MapComponent,
    WinrateAndGameCountComponent,
    PlayerCountComponent,
    ChartsMainComponent,
    GuideComponent,
    EditorComponent,
    AgeUpOptionComponent,
    AddButtonDialogComponent,
    DeckBuilderSearchComponent,
    DeleteDialogComponent,
    UnitEntryComponent,
    TooltipComponent,
    UnitViewerComponent,
    HomeComponent,
    HomeUpdateComponent,
    HomeInfoBannerComponent,
    HomeEventsComponent,
    HomeHallFameComponent,
    UnitComponent,
    YoutubeEmbedComponent,
    HomeCivPoolComponent,
    HomePlayersOnlineComponent,
    AboutComponent,
    VisionComponent,
    MissionComponent,
    RoadmapComponent,
    StrategyComponent,
    ReplayParserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    ClipboardModule,
    CarouselModule,
    NgIconsModule.withIcons({ heroArrowUpRight, heroArrowDownRight, heroUser, heroUserSolid, bootstrapDice5, bootstrapBoxArrowUpRight }),
    OAuthModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    DragDropModule,
    NgxCaptureModule,
    MatSliderModule,
    MatTooltipModule,
    NgxGoogleAnalyticsModule.forRoot('G-DXJ8NHLQQ2'),
    NgxGoogleAnalyticsRouterModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    QuillModule.forRoot(),
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [provideRouter(routes, withComponentInputBinding()), SteamApiService, ScreenSizeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
