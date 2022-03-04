import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from '../../google-token.service';
import { CourseTeacherList, parseTeacherList, Teacher } from '../../models';

@Component({
  selector: 'app-google-classroom-view',
  templateUrl: './google-classroom-view.component.html',
  styleUrls: ['./google-classroom-view.component.scss']
})

export class GoogleClassroomViewComponent implements OnInit {
  data$!: Observable<Teacher>;

  constructor( ) { }

  ngOnInit(): void {
    return
  }

}
