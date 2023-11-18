import { Component } from '@angular/core';
import { idCivToFlagRectangle } from 'src/app/constant';
import { ChartWinrateGlobal, WinrateGlobal } from 'src/app/services/charts';
import { ChartsService } from 'src/app/services/charts.service';
import { Patch } from 'src/app/services/patch';
import { PatchService } from 'src/app/services/patch.service';

@Component({
  selector: 'app-winrate-by-civ-by-elo',
  templateUrl: './winrate-by-civ-by-elo.component.html',
  styleUrls: ['./winrate-by-civ-by-elo.component.css']
})
export class WinrateByCivByEloComponent {
  data: ChartWinrateGlobal[] = [];
  private _selectedValue: number = 1;
  formatedData: WinrateGlobal[];
  formatedDataLeft: WinrateGlobal[] = [];
  formatedDataRight: WinrateGlobal[] = [];
  patchs: Patch[] = [];
  private _selectedPatch: number;

  sortField: string = '0';
  sortOrder: string = 'desc';


  constructor(private chartsService: ChartsService, private patchService: PatchService) { }

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
    this.chartsService.getWinrateByCivByElo(this._selectedValue, this._selectedPatch).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleResponse(response: ChartWinrateGlobal[]): void {
    if (!response) return;
    this.data = response;
    this.formatData(); // Ajout de cette ligne pour formater les données après les avoir reçues
  }

  formatData(): void {
    const formatedDataMap: { [key: number]: WinrateGlobal } = {};

    this.data.forEach(item => {
      if (!formatedDataMap[item.idciv]) {
        formatedDataMap[item.idciv] = {
          idciv: item.idciv,
          winPercentage0: 0,
          winPercentage1: 0,
          winPercentage2: 0,
          winPercentage3: 0,
          winPercentage4: 0,
          winPercentage5: 0,
          totalGames0: 0,
          totalGames1: 0,
          totalGames2: 0,
          totalGames3: 0,
          totalGames4: 0,
          totalGames5: 0,
        };
      }

      const keyWinPercentage = `winPercentage${item.rating}` as keyof WinrateGlobal;
      const keyTotalGames = `totalGames${item.rating}` as keyof WinrateGlobal;

      formatedDataMap[item.idciv][keyWinPercentage] = item.winPercentage;
      formatedDataMap[item.idciv][keyTotalGames] = item.totalGames;
    });

    this.formatedData = Object.values(formatedDataMap);
    if (this.sortField == '0') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage0 - a.winPercentage0);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage0 - b.winPercentage0);
      }
    }
    if (this.sortField == '1') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage1 - a.winPercentage1);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage1 - b.winPercentage1);
      }
    }
    if (this.sortField == '2') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage2 - a.winPercentage2);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage2 - b.winPercentage2);
      }
    }
    if (this.sortField == '3') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage3 - a.winPercentage3);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage3 - b.winPercentage3);
      }
    }
    if (this.sortField == '4') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage4 - a.winPercentage4);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage4 - b.winPercentage4);
      }
    }
    if (this.sortField == '5') {
      if (this.sortOrder == 'desc') {
        this.formatedData.sort((a, b) => b.winPercentage5 - a.winPercentage5);
      } else {
        this.formatedData.sort((a, b) => a.winPercentage5 - b.winPercentage5);
      }
    }
    const mid = Math.ceil(this.formatedData.length / 2);
    this.formatedDataLeft = this.formatedData.slice(0, mid);
    this.formatedDataRight = this.formatedData.slice(mid);
  }

  handleError(error: any) {
    console.error("There was an error fetching the data", error);
  }
  sortData(field: string) {
    // Change sort order if it's already sorting on this field
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Default to ascending sort for new fields
      this.sortOrder = 'desc';
    }
    this.sortField = field;
    this.formatData();
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
}