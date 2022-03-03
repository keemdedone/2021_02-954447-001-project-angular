import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleClassroomService } from '../../google-classroom.service';
import { coursesList, CourseTeacherList } from '../../models';

@Component({
  selector: 'app-google-classroom-list-display',
  templateUrl: './google-classroom-list-display.component.html',
  styleUrls: ['./google-classroom-list-display.component.scss']
})
export class GoogleClassroomListDisplayComponent implements OnInit {
  data$!: Observable<coursesList>;
  data1$!: Observable<CourseTeacherList>;

  constructor(
    private readonly service: GoogleClassroomService
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getAll();
    this.data1$ = this.service.getTeacher();
  }

}
