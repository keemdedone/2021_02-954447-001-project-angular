import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidService } from '../covid.service';
import { Covid, List } from '../models/covid';
import { provinces } from '../models/provinces';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss']
})
export class CovidListComponent implements OnInit {
  @Input() data: List<Covid> | null = null;

  ngOnInit(): void {
    return;
  }

}
