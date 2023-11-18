import { Component, Input } from '@angular/core';
import { PlayerInfo } from '../player-matchs.component';

@Component({
  selector: 'app-match-history-player',
  templateUrl: './match-history-player.component.html',
  styleUrls: ['./match-history-player.component.css'],
})
export class MatchHistoryPlayerComponent {
  @Input() isWin: boolean = false;
  @Input() PlayerList: PlayerInfo[];
  @Input() idPlayer: number;
}
