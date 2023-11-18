import {
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { isDevMode } from '@angular/core';

declare let Twitch: any;

@Component({
  selector: 'app-home-twitch-video',
  templateUrl: './home-twitch-video.component.html',
  styleUrls: ['./home-twitch-video.component.css'],
})
  export class HomeTwitchVideoComponent {
  @Input() name: string;
  private twitchEmbed: any = null;
  constructor() {}

  baseUrl: string;

  ngOnChanges(changes: SimpleChanges) {
    // Changes to name variable in twitch-live component
    if (changes['name'] && changes['name'].currentValue) {
      this.loadTwitchEmbed();
    }
  }

  private loadTwitchEmbed() {
    this.CheckBaseUrl();

    this.twitchEmbed?.destroy();

    this.twitchEmbed = new Twitch.Embed('twitch-video', {
      width: '100%',
      height: '100%',
      channel: this.name,
      parent: [this.baseUrl],
      layout: 'video',
      muted: true,
    });
  }

  private CheckBaseUrl() {
    if (this.baseUrl) {
      return;
    }

    // Get baseurl here as front-end overrides this
    if (isDevMode()) {
      this.baseUrl = 'localhost';
    } else {
      this.baseUrl = new URL('https://freefoodparty.com').hostname;
    }
  }
}
