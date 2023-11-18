import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let now = new Date().getTime();
    let difference = now - value;

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if (days == 1 ) {
      return `${days} day ago`;
    } else if ( days > 1) {
      return `${days} days ago`;
    }else if (hours == 1) {
      return `${hours} hour ago`;
    } else if (hours > 1) {
      return `${hours} hours ago`;
    } else if (minutes == 1) {
      return `${minutes} minute ago`;
    } else if (minutes > 1) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }
}
