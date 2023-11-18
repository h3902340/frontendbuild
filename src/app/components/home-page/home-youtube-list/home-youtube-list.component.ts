import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export type YoutubeVideo = {
  videoTitle: string;
  channelTitle: string;
  thumbnailUrl: string;
  idVideo: number;
  idVideoString: string;
  duration: number;
  viewCount: number;
  profileimageurl: string;
};

@Component({
  selector: 'app-home-youtube-list',
  templateUrl: './home-youtube-list.component.html',
  styleUrls: ['./home-youtube-list.component.css']
})
export class HomeYoutubeListComponent implements OnInit {
  public videoList: YoutubeVideo[];
  public customVideoList: YoutubeVideo[];
  public customIdList: string[] = [
    "WRntegzPksQ",
    "8LjwmGA3t90",
    "iWqkQfIqAAM",
    "arSxNw8IBU8",
    "ErtmsLwZzvo",
    "2d2n1eHhjZg",
  ];

  cols : number;

  gridByBreakpoint = {
    xl: 6,
    lg: 6,
    md: 3,
    sm: 3,
    xs: 2
  }

  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService, private breakpointObserver: BreakpointObserver) {
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

  ngOnInit() {
    this.videoList = [];
    this.customVideoList = [];

    this.youtubeService.getTopVideoList().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });

    this.youtubeService.getCustomVideoList(this.customIdList).subscribe({
      next: this.handleResponseCustom.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleResponse(response: YoutubeVideo[]) {
    this.videoList = response.concat(response);
    this.videoList = this.videoList.slice(0, 6);
    for (let i = 0; i < this.videoList.length; i++) {
      this.videoList[i].idVideoString = this.videoList[i].idVideo.toString();
      this.videoList[i].thumbnailUrl = this.videoList[i].thumbnailUrl.replace('hqdefault', 'mqdefault');
    }
  }

  private handleResponseCustom(response: YoutubeVideo[]) {
    this.customVideoList = response;

    for (let i = 0; i < this.customVideoList.length; i++) {
      this.customVideoList[i].idVideoString = this.customVideoList[i].idVideo.toString();
      this.customVideoList[i].thumbnailUrl = this.customVideoList[i].thumbnailUrl.replace('hqdefault', 'mqdefault');
    }
  }

  private handleError(error: Error) {
    console.error(error);
  }

  public toHHMMSS(duration: number): string {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration - (hours * 3600)) / 60);
    var seconds = duration - (hours * 3600) - (minutes * 60);
    let h: string = hours.toString();
    let m: string = minutes.toString();
    let s: string = seconds.toString();

    if (hours < 10) { h = "0" + hours; }
    if (minutes < 10) { m = "0" + minutes; }
    if (seconds < 10) { s = "0" + seconds; }
    if (hours == 0) {
      return m + ':' + s;
    } else {
      return h + ':' + m + ':' + s;
    }
  }

  public toShortViewCount(viewCount: number): string {
    if (viewCount < Math.pow(10, 3)) {
      return viewCount.toFixed();
    } else if (viewCount < Math.pow(10, 6)) {
      return (viewCount * Math.pow(10, -3)).toFixed() + 'K';
    } else if (viewCount < Math.pow(10, 9)) {
      return (viewCount * Math.pow(10, -6)).toFixed() + 'M';
    } else if (viewCount < Math.pow(10, 12)) {
      return (viewCount * Math.pow(10, -9)).toFixed() + 'B';
    } else if (viewCount < Math.pow(10, 15)) {
      return (viewCount * Math.pow(10, -12)).toFixed() + 'T';
    } else if (viewCount < Math.pow(10, 18)) {
      return (viewCount * Math.pow(10, -15)).toFixed() + 'Q';
    }
    return 'view count overflow';
  }
}