import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Card } from '../../utility';
import { foodIconSrc, goldIconSrc, influenceIconSrc, shipmentIconSrc, woodIconSrc } from '../../constant';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input()
  public tooltipWidth: number = 480;
  @Input()
  public card: Card;

  @ViewChild('root')
  public root: ElementRef;

  public foodIcon: string = foodIconSrc;
  public woodIcon: string = woodIconSrc;
  public goldIcon: string = goldIconSrc;
  public influenceIcon: string = influenceIconSrc;
  public shipmentIcon: string = shipmentIconSrc;

  public currentTooltipLeft: string = '0';
  public currentTooltipRight: string = '';
  public currentTooltipTop: string = '0';
  public currentTransform: string = 'translate(0%, -100%)';

  public ShowTip(cardPosition: { x: number, y: number, height: number }): void {
    if (cardPosition.x + this.tooltipWidth > window.innerWidth) {
      let diff = cardPosition.x + cardPosition.height - this.tooltipWidth;
      if (diff < 0) {
        this.currentTooltipLeft = '';
        this.currentTooltipRight = (-cardPosition.height + diff).toString();
      } else {
        this.currentTooltipLeft = '';
        this.currentTooltipRight = (-cardPosition.height).toString();
      }
    } else {
      this.currentTooltipLeft = '0';
      this.currentTooltipRight = '';
    }

    this.root.nativeElement.className = "card-tooltip-show";
    if (cardPosition.y - this.root.nativeElement.clientHeight < 0) {
      let diff = cardPosition.y + cardPosition.height + 10 + this.root.nativeElement.clientHeight - window.innerHeight;
      if (diff > 0) {
        this.currentTooltipTop = (this.root.nativeElement.clientHeight - cardPosition.y).toString();
        this.currentTransform = 'translate(0%, -100%)';
        if (cardPosition.x + cardPosition.height + 10 + this.tooltipWidth <= window.innerWidth) {
          this.currentTooltipLeft = (cardPosition.height + 10).toString();
          this.currentTooltipRight = '';
        }
      } else {
        this.currentTooltipTop = (cardPosition.height + 10).toString();
        this.currentTransform = 'translate(0%, 0%)';
      }
    } else {
      this.currentTooltipTop = '0';
      this.currentTransform = 'translate(0%, -100%)';
    }
  }

  public HideTip(): void {
    this.root.nativeElement.className = "card-tooltip-hide";
  }
}
