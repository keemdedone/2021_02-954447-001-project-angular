import { Component, Input, OnInit } from '@angular/core';

import { CovidProvince, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss'],
})
export class CovidListComponent implements OnInit {
  @Input() data: List<CovidProvince> | null = null;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {}
}
