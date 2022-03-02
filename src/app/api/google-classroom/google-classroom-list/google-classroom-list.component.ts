import { Component, Input, OnInit } from '@angular/core';
import { coursesList } from '../../models';

@Component({
  selector: 'app-google-classroom-list',
  templateUrl: './google-classroom-list.component.html',
  styleUrls: ['./google-classroom-list.component.scss']
})
export class GoogleClassroomListComponent implements OnInit {
  @Input() data: coursesList | null = null ;

  constructor() { }

  ngOnInit(): void {
    return;
  }

}
