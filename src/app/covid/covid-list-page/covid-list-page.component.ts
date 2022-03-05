import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidProvince, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';
import { provinces } from 'src/app/models/province';

@Component({
  selector: 'app-covid-list-page',
  templateUrl: './covid-list-page.component.html',
  styleUrls: ['./covid-list-page.component.scss'],
})
export class CovidListPageComponent implements OnInit {
  @Input() data: List<CovidProvince> | null = null;

  selectedProvinceName!: String;
  provinces: Array<String> = provinces;
  data$!: Observable<List<CovidProvince>>;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllProvinces();
  }

  onProvinceChange($event: any): void {
    this.selectedProvinceName = $event.target.value;

    this.data$ = this.data$.pipe(
      map((data) => this.filterResultByProvince(data))
    );
  }

  filterResultByProvince(data: List<CovidProvince>): List<CovidProvince> {
    data.results = data.results.filter(
      (result) => result.province == this.selectedProvinceName
    );

    return data;
  }
}
