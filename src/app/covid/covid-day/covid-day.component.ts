import { Component, Input, OnInit } from '@angular/core';
import {
  CovidAll,
  CovidDay,
  CovidTimelineCasesAll,
  List,
} from 'src/app/models/covid';
import { CovidService } from '../covid.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
import { LineChartOptions } from '../covid-line-chart/covid-line-chart.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-covid-day',
  templateUrl: './covid-day.component.html',
  styleUrls: ['./covid-day.component.scss'],
})
export class CovidDayComponent implements OnInit {
  public chartNewCasesCovidOptions!: LineChartOptions;
  public chartNewDeathCovidOptions!: LineChartOptions;
  public chartRecoverdCovidOptions!: LineChartOptions;

  public selectedDateCovidCases: CovidAll | null = null;

  public now: Date = new Date();

  @Input() timelineCasesAll: CovidTimelineCasesAll | null = null;

  constructor(private readonly service: CovidService) {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.timelineCasesAll) {
      this.chartNewCasesCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้ป่วย',
            data: this.timelineCasesAll!.chartNewCases.data,
          },
        ],
        titleText: 'จำนวนผู้ติดเชื้อสะสม',
        categories: this.timelineCasesAll!.chartNewCases.categories,
        colors: ['#ff8c8c'],
      };

      this.chartNewDeathCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้เสียชีวิต',
            data: this.timelineCasesAll!.chartNewDeath.data,
          },
        ],
        titleText: 'จำนวนผู้เสียชีวิตสะสม',
        categories: this.timelineCasesAll!.chartNewDeath.categories,
        colors: ['#868686'],
      };

      this.chartRecoverdCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้รักษาหาย',
            data: this.timelineCasesAll!.chartRecovered.data,
          },
        ],
        titleText: 'จำนวนผู้รักษาหายสะสม',
        categories: this.timelineCasesAll!.chartRecovered.categories,
        colors: ['#8ee08b'],
      };
    }
  }

  onDateChange($event: any) {
    this.selectedDateCovidCases = this.timelineCasesAll!.results.find(
      (data: CovidAll) => data.txn_date == $event.target.value
    )!;
  }
}
