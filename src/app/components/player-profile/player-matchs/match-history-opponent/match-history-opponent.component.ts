import { Component, Input } from '@angular/core';
import { PlayerInfo } from '../player-matchs.component';

@Component({
  selector: 'app-match-history-opponent',
  templateUrl: './match-history-opponent.component.html',
  styleUrls: ['./match-history-opponent.component.css']
})
export class MatchHistoryOpponentComponent {
  @Input() isWin: boolean = false;
  @Input() OpponentList: PlayerInfo[];
  @Input() idPlayer: number;
}
