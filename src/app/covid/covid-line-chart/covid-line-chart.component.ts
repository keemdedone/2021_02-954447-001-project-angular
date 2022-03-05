import { Component, Input, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  titleText: string;
  categories: Array<string>;
  colors: Array<string>;
};

@Component({
  selector: 'app-covid-line-chart',
  templateUrl: './covid-line-chart.component.html',
  styleUrls: ['./covid-line-chart.component.scss'],
})
export class CovidLineChartComponent implements OnInit {
  @Input() option: LineChartOptions | null = null;

  public chartOption: Partial<ChartOptions> | any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.chartOption = {
      series: this.option?.series,
      chart: {
        fontFamily: 'Kanit',
        width: 500,
        height: 300,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: this.option?.colors,
      },
      title: {
        text: this.option?.titleText,
        align: 'left',
      },
      grid: {
        show: false,
        row: {
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: this.option?.categories,
        labels: {
          show: false,
        },
      },
    };
  }
}
