import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  public transform(text: string, limitWidth: number, ellipsis: string = '...') {
    let width: number = this.getTextWidth(text, "Roboto");
    let substr: string = "";
    if (width > limitWidth) {
      let i = text.length;
      while (width > limitWidth) {
        i--;
        if (i < 0) break;
        substr = `${text.substring(0, i)}${ellipsis}`
        width = this.getTextWidth(substr, 'Roboto');
      }
      return substr;
    } else {
      return text;
    }
  }

  private getTextWidth(txt: string, font: string): number {
    let element = document.createElement('canvas');
    let context = element.getContext("2d");
    if (context == null) return 0;
    context.font = font;
    return context.measureText(txt).width;
  }
}