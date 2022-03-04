import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleTokenService } from '../../google-token.service';
import { CourseTeacherList, Teacher } from '../../models';

@Component({
  selector: 'app-google-classroom-view-display',
  templateUrl: './google-classroom-view-display.component.html',
  styleUrls: ['./google-classroom-view-display.component.scss']
})
export class GoogleClassroomViewDisplayComponent implements OnInit {
  data$!: Observable<Teacher>

  constructor(
    private readonly http: HttpClient,
  ) { }

  ngOnInit(): void {}

}
