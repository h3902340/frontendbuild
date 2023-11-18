import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/authenticated/user-profile/user-profile.component';
import { canActivate } from './services/auth.guard';
import { TokenHandlerComponent } from './components/authenticated/token-handler/token-handler.component';
import { LiveComponent } from './components/Lobbies/live/live.component';
import { PlayerProfileMainComponent } from './components/player-profile/player-profile-main/player-profile-main.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard/leaderboard.component';
import { TierListComponent } from './components/tier-list/tier-list.component';
import { BrowseComponent } from './components/Lobbies/browse/browse.component';
import { DeckBuilderComponent } from './components/tools/deck-builder/deck-builder.component';
import { MapComponent } from './components/map/map.component';
import { ChartsMainComponent } from './components/charts/charts-main/charts-main.component';
import { EditorComponent } from './components/editable/editor/editor.component';
import { GuideComponent } from './components/guide/guide.component';
import { UnitComponent } from './components/unit/unit.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReplayParserComponent } from './components/replay-parser/replay-parser.component';

export const routes: Routes = [
  { path: 'profile', component: PlayerProfileMainComponent, runGuardsAndResolvers: 'always', },
  { path: 'userprofile', component: UserProfileComponent, canActivate: [canActivate], },
  { path: 'token-handler', component: TokenHandlerComponent },
  { path: 'live', component: LiveComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'tierlist', component: TierListComponent },
  { path: 'statistics', component: ChartsMainComponent },
  { path: 'deckbuilder', component: DeckBuilderComponent },
  { path: 'replayparser', component: ReplayParserComponent },
  { path: 'maps', component: MapComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'unit', component: UnitComponent },
  { path: 'leaderboards', component: LeaderboardComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }