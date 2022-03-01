import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidService } from '../../covid.service';
import { Covid, List } from '../../models/covid';
import { provinces } from '../../models/provinces';

@Component({
  selector: 'app-covid-list-page',
  templateUrl: './covid-list-page.component.html',
  styleUrls: ['./covid-list-page.component.scss']
})
export class CovidListPageComponent implements OnInit {
  @Input() data: List<Covid> | null = null;

  selectedProvinceName!: String;
  provinces: string[] = provinces;
  data$!: Observable<List<Covid>>;

  constructor(
    private readonly service: CovidService,
  ) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

}
