import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/models/covid';
import { Vaccination } from 'src/app/models/vaccination';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {
  @Input() data: List<Vaccination> | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
