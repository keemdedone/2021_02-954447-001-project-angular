import { Component, Input, OnInit } from '@angular/core';
import { coursesList, CourseTeacherList } from '../../models';

@Component({
  selector: 'app-google-classroom-list',
  templateUrl: './google-classroom-list.component.html',
  styleUrls: ['./google-classroom-list.component.scss']
})
export class GoogleClassroomListComponent implements OnInit {
  @Input() data: coursesList | null = null ;
  
  @Input() data1: CourseTeacherList | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
