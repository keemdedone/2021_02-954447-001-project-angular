import { Component, Input, OnInit } from '@angular/core';
import { Covid, List } from '../../models/covid';


@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss']
})
export class CovidListComponent implements OnInit {
  @Input() data: List<Covid> | null = null;

  ngOnInit(): void {
    return
  }

}
