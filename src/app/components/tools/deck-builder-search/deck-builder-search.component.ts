import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/utility';

@Component({
  selector: 'app-deck-builder-search',
  templateUrl: './deck-builder-search.component.html',
  styleUrls: ['./deck-builder-search.component.css']
})
export class DeckBuilderSearchComponent implements OnInit, OnChanges {
  @Input()
  public search: string = '';

  @Input()
  public cardPool: Card[];

  @Output()
  public onCardClickedEvent = new EventEmitter<Card>();

  private oldSearch: string;

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['search']) {
      if (this.oldSearch != this.search) {
        this.cardPool = this.cardPool.filter((card) => card.displayName.toLowerCase().includes(this.search.toLowerCase()));
        this.oldSearch = this.search;
      }
    } else if (changes['cardPool']) {
      this.cardPool = this.cardPool.filter((card) => card.displayName.toLowerCase().includes(this.search.toLowerCase()));
    }
  }

  public onClickCard(card: Card): void {
    this.onCardClickedEvent.next(card);
  }
}
