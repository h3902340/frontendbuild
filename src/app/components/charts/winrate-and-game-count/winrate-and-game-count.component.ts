import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartWinrateGlobal, WinrateGlobal } from 'src/app/services/charts';
import { ChartsService } from 'src/app/services/charts.service';
import { Patch } from 'src/app/services/patch';
import { PatchService } from 'src/app/services/patch.service';
import { Chart } from 'chart.js';
import { civIdToInfo, idCivToFlagRectangle, idCivToName, idCivToPathName } from 'src/app/constant';
import 'chartjs-plugin-datalabels';

import ChartDataLabels from 'chartjs-plugin-datalabels';



let loadedImages: HTMLImageElement[] = [];
@Component({
  selector: 'app-winrate-and-game-count',
  templateUrl: './winrate-and-game-count.component.html',
  styleUrls: ['./winrate-and-game-count.component.css']
})
export class WinrateAndGameCountComponent {
  @Input() idPlayer: number;
  data: ChartWinrateGlobal[] = [];
  private _selectedValue: number = 1;
  formatedData: WinrateGlobal[];
  patchs: Patch[] = [];
  private _selectedPatch: number;
  private readonly minElo = 0;
  private readonly maxElo = 2500;
  private _eloLowerBound: number = this.minElo;
  private _eloUpperBound: number = this.maxElo;
  winrateChart: any;

  constructor(private chartsService: ChartsService, private patchService: PatchService) { }

  ngOnInit() {
    this.getPatchs();
    // Chart.register(ChartDataLabels);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
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
    this.chartsService.getWinrateByCivByEloAndElo(this._selectedValue, this._selectedPatch, this._eloLowerBound, this._eloUpperBound, this.idPlayer).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }
  handleResponse(response: ChartWinrateGlobal[]): void {
    if (!response) return;
    this.data = response;
    this.data.sort((a, b) => b.totalGames - a.totalGames);
    this.formatAndGenerateChart();
  }
  handleError(error: any) {
    console.error("There was an error fetching the data", error);
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
  getFlag(idciv: number) {
    return idCivToFlagRectangle(idciv);
  }
  getName(idciv: number) {
    return idCivToPathName(idciv);
  }



  createChart() {
    const labels = this.data.map(d => this.getFlag(d.idciv));
    const totalGames = this.data.map(d => d.totalGames);
    const winPercentages = this.data.map(d => d.winPercentage);
    const backgroundColors1 = [];
    const borderColors1 = [];
    const backgroundColors2 = [];
    const borderColors2 = [];

    backgroundColors1.push('#e2d810');
    borderColors1.push('#e2d810');

    backgroundColors2.push('#12a4d9');
    borderColors2.push('#12a4d9');

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Games count',
          data: totalGames,
          xAxisID: 'x-gamecount',
          backgroundColor: backgroundColors1,
          borderColor: borderColors1,
          borderWidth: 1,
          barThickness: 25
        },
        {
          label: 'Winrate',
          data: winPercentages,
          xAxisID: 'x-winrate',
          backgroundColor: backgroundColors2,
          borderColor: borderColors2,
          borderWidth: 1,
          barThickness: 25
        }
      ]
    };

    const flagImagePlugin = {
      id: 'flagImagePlugin',
      beforeDraw: (chart: any) => {
        const ctx = chart.ctx;
        const yAxis = chart.scales.y;

        yAxis.ticks.forEach((tick: any, index: number) => {
          const img = loadedImages[index];
          const y = yAxis.getPixelForTick(index);
          ctx.drawImage(img, yAxis.right - 80, y - img.height / 2 + 155, 60, 30);
        });
      }
    };
    const getNameReference = this.getName.bind(this);

    const chartOptions: any = {
      maintainAspectRatio: false,
      indexAxis: 'y' as 'y',
      scales: {
        'x-winrate': {
          position: 'bottom',
          beginAtZero: true,
          min: 30,
          suggestedMin: 30,
          suggestedMax: 70
        },
        'x-gamecount': {
          position: 'top',
          beginAtZero: true,
        },
        y: {
          ticks: {
            callback: (value: any, index: any, values: any) => {
              return "";
            },
            padding: 40
          }
        }
      },
      plugins: {
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          formatter: (value: any, context: any) => {
            // Determine if the dataset is for winrate or game count
            if (context.dataset.label === 'Games count') {
              return value; // Just return the game count
            } else if (context.dataset.label === 'Winrate') {
              return value + '%'; // Add a percentage sign for winrate
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function (tooltipItems: any[]): string {
              if (tooltipItems.length === 0) {
                return 'Unknown';
              }

              const tooltipItem = tooltipItems[0];
              const flagURL = tooltipItem.label;

              const idCiv = getCivIdFromUrl(flagURL);
              if (idCiv === null) {
                return 'Unknown';
              }

              const civInfo = civIdToInfo[idCiv];
              return civInfo.name;
            },

            label: function (tooltipItem: any): string {
              const datasetLabel = tooltipItem.dataset.label || '';
              return `${datasetLabel}: ${tooltipItem.formattedValue}`;
            }
          }
        }
      }
    };

    this.winrateChart = new Chart('winrateChart', {
      type: 'bar',
      data: chartData,
      options: chartOptions,
      plugins: [flagImagePlugin, ChartDataLabels]
    });
  }

  formatAndGenerateChart() {
    if (this.winrateChart) {
      this.winrateChart.destroy(); // Destroy the existing chart
    }

    const labels = this.data.map(d => this.getFlag(d.idciv));

    // Reset the loadedImages array
    loadedImages = [];

    // Preload the images
    labels.forEach((src, index) => {
      let img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages[index] = img;
        if (loadedImages.filter(Boolean).length === labels.length) {
          this.createChart();
          this.adjustCanvasHeight();
        }
      };
      img.onerror = () => {
        console.error(`Error loading image from ${src}`);
      };
    });
  }
  barHeight: number = 60;
  initialHeight: number = 100;
  adjustCanvasHeight() {
    const chartContainer = document.querySelector('.chart-container') as HTMLElement;
    if (chartContainer) {
      const numberOfBars = this.data.length;
      chartContainer.style.height = ` ${numberOfBars * this.barHeight + this.initialHeight}px`; // Adjust the height based on the number of bars
    }
  }


}

function getCivIdFromUrl(flagURL: string): number | null {
  for (let id in civIdToInfo) {
    const civInfo = civIdToInfo[id];
    if (civInfo.urlRectanle === flagURL.split('/').pop()) {
      return civInfo.idCiv;
    }
  }
  return null;
}
