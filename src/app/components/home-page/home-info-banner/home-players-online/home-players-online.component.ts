import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { JsonService } from 'src/app/services/json.service';
import { PlayerCountService } from 'src/app/services/player-count.service';

@Component({
  selector: 'app-home-players-online',
  templateUrl: './home-players-online.component.html',
  styleUrls: ['./home-players-online.component.css']
})
export class HomePlayersOnlineComponent {
  public playerCount: any = '';
  constructor(private playerCountService: PlayerCountService, private jsonService: JsonService) { }

  public async ngOnInit(): Promise<void> {
    let response = await firstValueFrom(this.playerCountService.getPlayerCount());
    this.playerCount = response.response.player_count;
  
    if (!isNaN(this.playerCount)) {
        this.playerCount = Number(this.playerCount).toLocaleString();
    }
  }
}