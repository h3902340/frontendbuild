import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { } from 'src/app/app.component';
import { PlayerCountService } from 'src/app/services/player-count.service';
import { StrTableService } from 'src/app/services/string-table.service';
import { getBrowserLanguage } from 'src/app/utility';

@Component({
  selector: 'app-player-count',
  templateUrl: './player-count.component.html',
  styleUrls: ['./player-count.component.css']
})
export class PlayerCountComponent implements OnInit {
  public playerCountString: string = '';
  constructor(private stringTableService: StrTableService, private playerCountService: PlayerCountService) { }

  public async ngOnInit(): Promise<void> {
    let response = await firstValueFrom(this.playerCountService.getPlayerCount());
    let playerCount = response.response.player_count;
    this.stringTableService.setLanguage(getBrowserLanguage());
    this.playerCountString = `${await this.stringTableService.getLocalizedString(20501)}: ${playerCount}`;
  }
}