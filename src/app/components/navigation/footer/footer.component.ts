import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public homeLink: string = '/';

  contentList = [
    { label: 'Leaderboards', link: '/leaderboards' },
    { label: 'Statistics', link: '/statistics' },
  ];

  lobbiesList = [
    { label: 'Live', link: '/live' },
    { label: 'Browse', link: '/browse' },
  ];

  toolsList = [
    { label: 'Deck Builder', link: '/deckbuilder' },
    { label: 'Tierlist', link: '/tierlist' },
    { label: 'Replay Parser', link: '/replayparser' },
  ];

  resourcesList = [
    { label: 'Maps', link: '/maps' },
  ];

  socialsList = [
    { image: 'assets/icons/discord-icon-white.png', link: 'https://discord.gg/b6JJnChxrS' },
    { image: 'assets/icons/twitch-white-logo.png', link: 'https://www.twitch.tv/freefoodparty' },
    { image: 'assets/icons/youtube-white-logo.png', link: 'https://www.youtube.com/@FreeFoodParty' },
  ];
}