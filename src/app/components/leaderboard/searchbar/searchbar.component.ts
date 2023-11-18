import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable, map, of, startWith, switchMap, tap } from 'rxjs';
import { Player } from 'src/app/services/leaderboard';
import { LeaderboardService } from 'src/app/services/leaderboard.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input()
  public placeHolder: string = 'Search player';

  @Input()
  public value: string = '';

  @Output()
  public searchChanged = new EventEmitter<string>();

  @Output()
  public onClicked = new EventEmitter();

  myControl = new FormControl();

  constructor(private leaderboardService: LeaderboardService, private router: Router) {
    this.myControl.valueChanges.subscribe({
      next: (value: string) => {
        this.searchChanged.emit(value.trim());
      }
    });
  }

  public onInputClicked() {
    this.onClicked.next(null);
  }
}