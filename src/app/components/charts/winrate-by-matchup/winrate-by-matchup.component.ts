import { Component } from '@angular/core';
import { idCivToFlagRectangle } from 'src/app/constant';
import { ChartWinrateMatchup } from 'src/app/services/charts';
import { ChartsService } from 'src/app/services/charts.service';
import { ChangeDetectorRef } from '@angular/core';
import { PatchService } from 'src/app/services/patch.service';
import { Patch } from 'src/app/services/patch';
@Component({
  selector: 'app-winrate-by-matchup',
  templateUrl: './winrate-by-matchup.component.html',
  styleUrls: ['./winrate-by-matchup.component.css']
})
export class WinrateByMatchupComponent {
  gameMode: number = 1;
  ratingKeys: string[] = [];
  data: ChartWinrateMatchup[] = [];
  private _selectedValue: number = 1;
  private readonly minElo = 0;
  private readonly maxElo = 2500;
  private _eloLowerBound: number = this.minElo;
  private _eloUpperBound: number = this.maxElo;
  patchs: Patch[] = [];
  private _selectedPatch: number;
  constructor(private chartsService: ChartsService, private cdr: ChangeDetectorRef, private patchService: PatchService) { }

  ngOnInit() {
    this.getPatchs();
  }
  getPatchs() {
    this.patchService.getPatchs().subscribe({
      next: this.handleResponsePatch.bind(this),
      error: this.handleErrorPatch.bind(this)
    });
  }
  handleResponsePatch(response: Patch[]): void {
    if (!response) return;
    this.patchs = response;
    this._selectedPatch = Math.max(...this.patchs.map(patch => patch.id));
    this.getDatas();
  }
  handleErrorPatch(error: any) {
    console.error("There was an error fetching the patch data", error);
  }

  getDatas() {
    this.chartsService.getWinrateByCivByMatchup(this._selectedValue, this._eloLowerBound, this._eloUpperBound, this._selectedPatch).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  civPlayers: number[] = [];
  civOpponents: number[] = [];
  tableData: Map<number, Map<number, ChartWinrateMatchup>> = new Map();
  displayedColumns: string[] = ['civPlayer'];

  handleResponse(response: ChartWinrateMatchup[]): void {
    if (!response) return;

    this.data = [...response];
    this.tableData = new Map();


    // Populer les listes de civPlayers et civOpponents
    response.forEach(item => {
      if (!this.civPlayers.includes(item.civPlayer)) {
        this.civPlayers.push(item.civPlayer);
      }

      if (!this.civOpponents.includes(item.civOpponent)) {
        this.civOpponents.push(item.civOpponent);
      }

      if (!this.tableData.has(item.civPlayer)) {
        this.tableData.set(item.civPlayer, new Map<number, ChartWinrateMatchup>());
      }

      this.tableData.get(item.civPlayer)!.set(item.civOpponent, item);

    });

    // Trier civPlayers et civOpponents par ordre numérique
    this.civPlayers.sort((a, b) => a - b);
    this.civOpponents.sort((a, b) => a - b);

    this.displayedColumns = ['civPlayer', ...this.civOpponents.map(o => o.toString())];
    this.cdr.detectChanges();
  }


  handleError(error: any) {
    console.error("There was an error fetching the data", error);
  }

  getFlag(idciv: number) {
    return idCivToFlagRectangle(idciv);
  }
  getCssClass(percentage: number): string {
    if (percentage > 60) return 'very-green';
    if (percentage <= 60 && percentage >= 50) return 'light-green';
    if (percentage < 50 && percentage >= 40) return 'light-red';
    if (percentage < 40) return 'very-red';
    return ''; // classe par défaut
  }
  get selectedValue(): number {
    return this._selectedValue;
  }

  set selectedValue(value: number) {
    this._selectedValue = value;
    this.getDatas()
  }

  get selectedPatch(): number {
    return this._selectedPatch;
  }

  set selectedPatch(value: number) {
    this._selectedPatch = value;
    this.getDatas()
  }


  public get eloLowerBound(): number {
    return this._eloLowerBound;
  }

  public set eloLowerBound(lowerBound: number) {
    this._eloLowerBound = lowerBound;
    this.getDatas();
  }

  public get eloUpperBound(): number {
    return this._eloUpperBound;
  }

  public set eloUpperBound(upperBound: number) {
    this._eloUpperBound = upperBound;
    this.getDatas();
  }
  onSliderChange(event: any) {
    if (event.target.className === 'mdc-slider__input') {
      this.eloLowerBound = event.srcElement.ariaValueText;
    } else if (event.target.className === 'mdc-slider__input mat-slider__right-input') {
      this.eloUpperBound = event.srcElement.ariaValueText;
    }
  }
}
