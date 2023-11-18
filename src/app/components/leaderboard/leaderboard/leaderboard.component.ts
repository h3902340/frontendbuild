import { Component } from '@angular/core';
import { getTimeAgoString } from 'src/app/utility';

@Component({
  selector: 'app-leaderboard',
  styleUrls: ['leaderboard.component.css'],
  templateUrl: 'leaderboard.component.html'
})
export class LeaderboardComponent {
  search: string = "";
  gameMode: number = 1;

  public lastUpdateDate: number;
  public lastUpdateDateString: string;
  private timer: number;

  onSearchChanged(searchValue: string) {
    this.search = searchValue;
  }

  onTabChanged(gameMode: number) {
    this.gameMode = gameMode;
  }

  getTitleForGameMode(gameMode: number): string {
    switch (gameMode) {
      case 1: return 'Supremacy Solo';
      case 2: return 'Supremacy Team';
      case 3: return 'Treaty';
      case 4: return 'Deathmatch';
      case 5: return 'Empire Wars Solo';
      case 6: return 'Empire Wars Team';
      case 7: return 'Blitz Treaty';
      case 8: return '2vs2 Supremacy';
      case 9: return '3vs3 Supremacy';
      case 10: return '4vs4 Supremacy';
      default: return '';
    }
  }

  getSuperscriptForGameMode(gameMode: number): string {
    switch (gameMode) {
      case 1: return '';
      case 2: return '';
      case 3: return '';
      case 4: return '';
      case 5: return '';
      case 6: return '';
      case 7: return ' ffp';
      case 8: return ' ffp';
      case 9: return ' ffp';
      case 10: return ' ffp';
      default: return '';
    }
  }

  public onLastUpdateTimeChanged(event: { date: number, dateString: string }): void {
    this.lastUpdateDate = event.date;
    this.lastUpdateDateString = event.dateString;
    clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      this.lastUpdateDate += 1;
      this.lastUpdateDateString = getTimeAgoString(this.lastUpdateDate);
    }, 1000);
  }
}