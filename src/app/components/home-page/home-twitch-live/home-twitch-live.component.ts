import { Component, HostListener } from '@angular/core';
import { interval, startWith, switchMap } from 'rxjs';
import { TwitchService } from 'src/app/services/twitch.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const width = 320;
const height = 180;

@Component({
  selector: 'app-home-twitch-live',
  templateUrl: './home-twitch-live.component.html',
  styleUrls: ['./home-twitch-live.component.css'],
})
export class HomeTwitchLiveComponent {
  streams: any[] = [];
  name: string;
  cols : number;

  gridByBreakpoint = {
    xl: 6,
    lg: 6,
    md: 3,
    sm: 3,
    xs: 2
  }

  constructor(private twitchService: TwitchService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  ngOnInit(): void {
    interval(60000) // emit value every 60 seconds
      .pipe(
        startWith(0), // start immediately
        switchMap(() => this.twitchService.getStreams()) // switch to new observable on every emit
      )
      .subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleResponse(response: any[]) {
    this.streams = response.map((stream) => {
      const timestamp = new Date().getTime();
      return {
        ...stream,
        thumbnail_url: stream.thumbnail_url
          .replace('{width}', width)
          .replace('{height}', height),
        timestamp: timestamp,
      };
    });

    // this.streams = this.streams.slice(0, 6);

    // this.streams = this.streams.concat(this.streams).concat(this.streams).concat(this.streams);

    if (this.streams.length > 0 && !this.name) {
      // Set priority list for main Twitch panel

      for (let stream of this.streams ) {
        if (stream.user_name === 'FreeFoodParty') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === 'KavernaTV') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === 'shake2020aoe') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === 'Kr1spyKr') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === 'kynesie') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === 'revnak_aoe') {
          this.name = stream.user_name;
          break;
        } else if (stream.user_name === '4yk1n') {
          this.name = stream.user_name;
          break;
        }
      }

      const namesInList = this.streams.map((stream) => stream.user_name);

      if (!namesInList.includes(this.name)) {
        this.name = '';
      }

      if (!this.name) {
        this.name = this.streams[0].user_name;
      }
    }
  }

  getImageUrl(stream: any): string {
    return `${stream.thumbnail_url
      .replace('{width}', width)
      .replace('{height}', height)}?t=${stream.timestamp}`;
  }

  private handleError(error: Error) {
    console.log(error);
  }

  updateName(stream: any): void {
    this.name = stream.user_name;

    // const screenWidth = window.innerWidth;
    // const viewPadding = (screenWidth * 5) / 100; // home.component.css root class has 95% width

    // if (screenWidth < 450 + viewPadding) {
    //   if (this.name) {
    //     window.open('https://www.twitch.tv/' + this.name, '_blank'); // Open twitch page
    //   }
    // } else {
      let twitch_panel = document.getElementById('twitch panel');

      // Scroll top to twitch-live
      if (twitch_panel) { 
        window.scroll({
          top: twitch_panel.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
      // }
  }
}