import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingHistory } from 'src/app/services/leaderboard';
import { ProfileService } from 'src/app/services/profile.service';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

export interface ChartData {
  label: string;
  data: { x: Date; y: number }[];
  fill: boolean;
  borderColor: string;
  tension: number;
  pointStyle: string;
}

@Component({
  selector: 'app-rating-history',
  templateUrl: './rating-history.component.html',
  styleUrls: ['./rating-history.component.css'],
})
export class RatingHistoryComponent implements OnInit, OnChanges {
  @Input() idPlayer: number;
  ratings: ChartData[];
  public chart: any;

  constructor(private profileService: ProfileService) {}
  ngOnInit() {
    this.profileService.getRatingHistory(this.idPlayer).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  minElo: number = 3000;
  maxElo: number = 0;
  private handleResponse(response: RatingHistory[]) {
    let chartData: ChartData[] = [];
    const gameModes = [...new Set(response.map((item) => item.gameMode))]; // obtenir les modes de jeu uniques
    const modeToLabelColor: {
      [key: number]: { label: string; color: string };
    } = {
      1: { label: 'Solo', color: '#FF5733' },
      8: { label: '2v2', color: '#00FFFF' },
      9: { label: '3v3', color: '#FFD700' },
      10: { label: '4v4', color: '#008080' },
      2: { label: 'Team', color: '#00AEEF' },
      7: { label: 'Blitz', color: '#9932CC' },
      3: { label: 'Treaty', color: '#FFC300' },
      4: { label: 'DM', color: '#8B008B' },
      5: { label: 'EW Solo', color: '#00FF7F' },
      6: { label: 'EW Team', color: '#FF1493' },
    };
    gameModes.sort((a, b) => a - b);
    gameModes.forEach((mode) => {
      if (!modeToLabelColor[mode]) {
        console.warn(`Mode ${mode} is not defined in modeToLabelColor`);
        return; // skip the current iteration
      }
      let data = response
        .filter((item) => item.gameMode === mode && item.eloAfter != null) // filter out items with null eloAfter
        .map((item) => {
          if (this.minElo === null || item.eloAfter < this.minElo) {
            this.minElo = item.eloAfter;
          }
          if (this.maxElo === null || item.eloAfter > this.maxElo) {
            this.maxElo = item.eloAfter;
          }
          return {
            x: item.startDate,
            y: item.eloAfter,
          };
        });

      let labelColor = modeToLabelColor[mode];

      chartData.push({
        label: labelColor.label,
        data: data,
        fill: false,
        borderColor: labelColor.color,
        tension: 0.1,
        pointStyle: 'rectRounded',
      });
    });

    // Add some space betwween top and bottom min/max
    this.minElo -= 5;
    this.maxElo += 5;

    // Define the custom sorting order based on the label names
    const customSortOrder = [
      'Solo',
      '2v2',
      '3v3',
      '4v4',
      'Team',
      'Blitz',
      'Treaty',
      'DM',
      'EW Solo',
      'EW Team',
    ];

    // Sort the data based on the custom sorting order
    chartData.sort(
      (a, b) =>
        customSortOrder.indexOf(a.label) - customSortOrder.indexOf(b.label)
    );
        
    this.ratings = chartData;

    // TODO: I am trying to reduce values that are too close from each other
    // console.log("ratings size:" + this.ratings.length);

    // // Create a new array to store filtered ratings
    // const filteredRatings = [this.ratings[0]]; // Initialize with the first rating

    // for (let i = 1; i < this.ratings.length; i++) {
    //   const currentStartDate = new Date(this.ratings[i].data[0].x);
    //   let shouldAdd = true;
    
    //   for (let j = 0; j < filteredRatings.length; j++) {
    //     const existingStartDate = new Date(filteredRatings[j].data[0].x);
    
    //     if (this.isWithinInterval(currentStartDate, existingStartDate)) {
    //       shouldAdd = false;
    //       break;
    //     }
    //   }
    
    //   if (shouldAdd) {
    //     filteredRatings.push(this.ratings[i]);
    //   }
    // }

    // this.ratings = filteredRatings;

    // console.log("ratings new size:" + this.ratings.length);

    this.createChart();
  }

  private handleError(error: Error) {
    console.log(error);
  }

  interval = 24 * 60 * 60 * 1000; // 5 hours in milliseconds

  private isWithinInterval(date1: Date, date2: Date) {
    return Math.abs(date1.getTime() - date2.getTime()) >= this.interval;
  }

  createChart() {
    this.chart?.destroy();

    // Calculate initial min and max elo values
    let minElo = 3000;
    let maxElo = 0;

    this.ratings.forEach((dataset: any) => {
      const eloValues = dataset.data.map((dataPoint: any) => dataPoint.y);
      const minDatasetElo = Math.min(...eloValues);
      const maxDatasetElo = Math.max(...eloValues);

      if (minDatasetElo < minElo) {
        minElo = minDatasetElo;
      }

      if (maxDatasetElo > maxElo) {
        maxElo = maxDatasetElo;
      }
    });

    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        datasets: this.ratings,
      },
      options: {
        elements: {
          point: {
            borderWidth: 0,
            radius: 5,
            backgroundColor: '#00000000',
          },
          line: {
            borderWidth: 3,
          },
        },
        hover: {
          intersect: true,
        },
        interaction: {
          intersect: true,
        },
        plugins: {
          legend: {
            align: 'center',
            title: {
              display: true,
              text: 'Game Modes',
            },
            labels: {
              usePointStyle: false,
              color: '#fcf0ae',
              font: {
                family: 'Open Sans',
                size: 15,
                weight: 'bold',
              },
              padding: 15,
            },
            onClick: (event, legendItem, legend) => {
              const index = legendItem.datasetIndex;

              if (index === undefined) {
                return;
              }

              // Toggling the visibility of datasets
              let hasHiddenElements = false;
              this.chart.data.datasets.forEach((dataset: any) => {
                if (dataset.hidden) {
                  hasHiddenElements = true;
                  return;
                }
              });

              // Check if the clicked dataset is already visible
              const clickedDataset = this.chart.data.datasets[index];

              if (!clickedDataset.hidden && hasHiddenElements) {
                // If it's visible, unhide all datasets (clicking same element again)
                this.chart.data.datasets.forEach((dataset: any) => {
                  dataset.hidden = false;
                });
              } else {
                // Otherwise, loop through the datasets and hide/show them based on the clicked label
                this.chart.data.datasets.forEach(
                  (dataset: any, datasetIndex: number) => {
                    if (datasetIndex === index) {
                      dataset.hidden = false; // Show the clicked dataset
                    } else {
                      dataset.hidden = true; // Hide other datasets
                    }
                  }
                );
              }

              // Update the suggestedMinMax values to fit the visible dataset
              const visibleDatasets = this.chart.data.datasets.filter(
                (dataset: any) => !dataset.hidden
              );

              if (visibleDatasets.length > 0) {
                const allEloValues = visibleDatasets.flatMap((dataset: any) =>
                  dataset.data.map((dataPoint: any) => dataPoint.y)
                );

                const minElo2 = Math.min(...allEloValues);
                const maxElo2 = Math.max(...allEloValues);

                const tickSpacing = 100;

                // Calculate the nearest lower and nearest higher multiple of 100
                const nearestLowerMultiple = Math.floor(minElo2 / tickSpacing) * tickSpacing;
                const nearestHigherMultiple = Math.ceil(maxElo2 / tickSpacing) * tickSpacing;

                // Update the min and max properties within the y-axis scale
                this.chart.options.scales.y.min = nearestLowerMultiple;
                this.chart.options.scales.y.max = nearestHigherMultiple;

                // Calculate the range of the y-axis based on minElo2 and maxElo2
                const tickRange =
                  this.chart.options.scales.y.max -
                  this.chart.options.scales.y.min;

                // Calculate the next tick value as the nearest multiple of 100 greater than or equal to minElo2
                const nextTickValue = Math.ceil(minElo2 / tickSpacing) * tickSpacing;

                // Calculate the number of ticks needed within the given range, ensuring a minimum of 2 ticks
                const numberOfTicks = Math.max(Math.ceil(tickRange / tickSpacing), 2);

                // Calculate the tick step size based on the number of ticks needed
                const tickStepSize = tickRange / numberOfTicks;

                // Calculate an array of tick values based on the nextTickValue and tickStepSize
                const tickValues = Array.from(
                  { length: numberOfTicks + 1 },
                  (_, index) => nextTickValue + index * tickStepSize
                );

                // Update the y-axis ticks with the calculated tick values
                this.chart.options.scales.y.ticks = {
                  ...this.chart.options.scales.y.ticks,
                  maxTicksLimit: tickValues.length,
                  stepSize: tickStepSize,
                  callback: (value: number) => {
                    if (tickValues.includes(value)) {
                      return value.toString();
                    }
                    return '';
                  },
                };
              }

              // Update the chart to reflect the changes
              this.chart.update();
            },
          },
        },
        scales: {
          x: {
            time: {
              displayFormats: {
                millisecond: 'MMM DD',
                second: 'MMM DD',
                minute: 'MMM DD',
                hour: 'MMM DD',
                day: 'MMM DD',
                week: 'MMM DD',
                month: 'MMM DD',
                quarter: 'MMM DD',
                year: 'MMM DD',
              },
            },
            type: 'time',
            title: {
              display: false,
              text: 'Date',
            },
            ticks: {
              maxTicksLimit: 10,
              color: 'white', // Set color of ticks
              font: {
                family: 'Open Sans',
                size: 14,
                weight: 'normal',
              },
              padding: 5,
            },
            border: {
              color: 'white',
              width: 1.5,
            },
          },
          y: {
            min: minElo,
            max: maxElo,
            beginAtZero: false,
            title: {
              display: true,
              text: 'ELO',
            },
            border: {
              color: 'white',
              width: 1.5,
              z: 1,
            },
            ticks: {
              color: 'white', // Set color of ticks
              font: {
                family: 'Open Sans',
                size: 14,
                weight: 'normal',
              },
              padding: 10,
            },
          },
        },
      },
    });

    // if only one dot as value then make it a stand out
    this.chart.data.datasets.forEach((dataset: any) => {
      if (dataset.data.length === 1) {
        dataset.pointBorderColor = dataset.borderColor; // Set the border color
        dataset.pointBackgroundColor = dataset.borderColor; // Set the fill color
        dataset.pointBorderWidth = 5; // Set the border width
      } else {
        dataset.pointBorderWidth = 0; // No border for datasets with multiple points
      }
    });

     // Update the suggestedMinMax values to fit the visible dataset
     const visibleDatasets = this.chart.data.datasets.filter(
      (dataset: any) => !dataset.hidden
    );

    if (visibleDatasets.length > 0) {
      const allEloValues = visibleDatasets.flatMap((dataset: any) =>
        dataset.data.map((dataPoint: any) => dataPoint.y)
      );

      const minElo2 = Math.min(...allEloValues);
      const maxElo2 = Math.max(...allEloValues);

      const tickSpacing = 100;

      // Calculate the nearest lower and nearest higher multiple of 100
      const nearestLowerMultiple = Math.floor(minElo2 / tickSpacing) * tickSpacing;
      const nearestHigherMultiple = Math.ceil(maxElo2 / tickSpacing) * tickSpacing;

      // Update the min and max properties within the y-axis scale
      this.chart.options.scales.y.min = nearestLowerMultiple;
      this.chart.options.scales.y.max = nearestHigherMultiple;

      // Calculate the range of the y-axis based on minElo2 and maxElo2
      const tickRange =
        this.chart.options.scales.y.max -
        this.chart.options.scales.y.min;

      // Calculate the next tick value as the nearest multiple of 100 greater than or equal to minElo2
      const nextTickValue = Math.ceil(minElo2 / tickSpacing) * tickSpacing;

      // Calculate the number of ticks needed within the given range, ensuring a minimum of 2 ticks
      const numberOfTicks = Math.max(Math.ceil(tickRange / tickSpacing), 2);

      // Calculate the tick step size based on the number of ticks needed
      const tickStepSize = tickRange / numberOfTicks;

      // Calculate an array of tick values based on the nextTickValue and tickStepSize
      const tickValues = Array.from(
        { length: numberOfTicks + 1 },
        (_, index) => nextTickValue + index * tickStepSize
      );

      // Update the y-axis ticks with the calculated tick values
      this.chart.options.scales.y.ticks = {
        ...this.chart.options.scales.y.ticks,
        maxTicksLimit: tickValues.length,
        stepSize: tickStepSize,
        callback: (value: number) => {
          if (tickValues.includes(value)) {
            return value.toString();
          }
          return '';
        },
      };
    }
    
    // Update the chart to reflect the changes
    this.chart.update();
  }
}