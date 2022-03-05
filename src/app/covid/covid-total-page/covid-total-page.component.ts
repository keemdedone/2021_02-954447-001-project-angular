import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles, CovidDay, CovidNews, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-total-page',
  templateUrl: './covid-total-page.component.html',
  styleUrls: ['./covid-total-page.component.scss'],
})
export class CovidTotalPageComponent implements OnInit {
  @Input() data: List<CovidDay> | null = null;

  data$!: Observable<List<CovidDay>>;
  news$!: Observable<Array<Articles>>;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllDay();
    this.news$ = this.service.getAllNews();
  }
}
