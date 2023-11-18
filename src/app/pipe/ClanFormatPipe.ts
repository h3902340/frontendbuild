import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'clanFormat'})
export class ClanFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return '[' + value + ']';
  }
}
