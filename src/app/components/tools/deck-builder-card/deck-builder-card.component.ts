import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { foodIconSrc, woodIconSrc, goldIconSrc, influenceIconSrc, shipmentIconSrc } from 'src/app/constant';
import { TooltipComponent } from 'src/app/components/tooltip/tooltip.component';
import { Card } from 'src/app/utility';

@Component({
  selector: 'app-deck-builder-card',
  templateUrl: './deck-builder-card.component.html',
  styleUrls: ['./deck-builder-card.component.css']
})
export class DeckBuilderCardComponent {
  @Input()
  public card: Card;
  @Input()
  public cardHeight: number;
  @Input()
  public hideTick: boolean = false;
  @Output()
  public onCardClickedEvent = new EventEmitter<DeckBuilderCardComponent>();

  @ViewChild('tooltip')
  public tooltip: TooltipComponent;

  public foodIcon: string = foodIconSrc;
  public woodIcon: string = woodIconSrc;
  public goldIcon: string = goldIconSrc;
  public influenceIcon: string = influenceIconSrc;
  public shipmentIcon: string = shipmentIconSrc;

  public onHoverCard(event: any) {
    this.tooltip.ShowTip(event.currentTarget.getBoundingClientRect());
  }

  public onLeaveCard(event: any) {
    this.tooltip.HideTip();
  }

  public onClickCard(event: any): void {
    this.onCardClickedEvent.next(this);
  }

  public setIconSrc(src: string): void {
    this.card.iconSrc = src;
  }
  public getIconSrc(): string {
    return this.card.iconSrc;
  }
}
