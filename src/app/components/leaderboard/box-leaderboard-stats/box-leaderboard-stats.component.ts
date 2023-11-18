import { Component, Input, SimpleChanges } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { catchError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-box-leaderboard-stats',
  templateUrl: './box-leaderboard-stats.component.html',
  styleUrls: ['./box-leaderboard-stats.component.css']
})
export class BoxLeaderboardStatsComponent {
  isInfoGot: boolean = false;
  @Input() gameMode: number;
  nameStreak: string;
  qualifier: string;
  streak: number;
  constructor(private leaderboardService: LeaderboardService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.fetchLeaderboardStats();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['gameMode']) {
      this.fetchLeaderboardStats();
    }
  }
  fetchLeaderboardStats() {
    this.isInfoGot = false;
    this.leaderboardService.getLeaderboardStats(this.gameMode)
      .pipe(
        catchError((error) => {
          console.error('Failed to fetch leaderboard stats:', error);
          return [];
        })
      )
      .subscribe((data: any[]) => {
        if (!data[0]) return;

        this.nameStreak = data[0][4];
        this.streak = data[0][6];
        if (this.streak < 10) {
          this.qualifier = "a";
        } else if (this.streak < 20) {
          this.qualifier = "a powerful";
        } else if (this.streak < 30) {
          this.qualifier = "a dominant";
        } else if (this.streak < 40) {
          this.qualifier = "an impressive";
        } else if (this.streak < 50) {
          this.qualifier = "an unstoppable";
        } else if (this.streak < 60) {
          this.qualifier = "a phenomenal";
        } else if (this.streak < 70) {
          this.qualifier = "an invincible";
        } else if (this.streak < 80) {
          this.qualifier = "a heroic";
        } else if (this.streak < 90) {
          this.qualifier = "a legendary";
        } else {
          this.qualifier = "a divine";
        }
        this.isInfoGot = true;
      });
  }
  getWinRatio(wins: number, losses: number): number {
    const totalGames = wins + losses;
    return totalGames > 0 ? (wins / totalGames) * 100 : 0;
  }
}
