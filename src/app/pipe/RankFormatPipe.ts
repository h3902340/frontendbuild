import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rankFormat'})
export class RankFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }
    return '#' + value  ;
  }
}
