import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/covid';
import { Vaccination } from 'src/app/models/vaccination';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-vaccine-list-page',
  templateUrl: './vaccine-list-page.component.html',
  styleUrls: ['./vaccine-list-page.component.scss']
})
export class VaccineListPageComponent implements OnInit {
  @Input() data: List<Vaccination> | null =null;

  data$!: Observable<List<Vaccination>>;

  constructor(
    private readonly service: CovidService
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getVaccine();
  }

}
