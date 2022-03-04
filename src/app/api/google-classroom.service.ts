import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from './google-token.service';
import { coursesList, CourseTeacherList, parseCoursesList, parseTeacherList } from './models';

const CURL = 'https://classroom.googleapis.com/v1/courses';

@Injectable({
  providedIn: 'root'
})
export class GoogleClassroomService {
  data$!: Observable<coursesList>

  constructor(
    private readonly tokenService : GoogleTokenService,
    private readonly http : HttpClient,
  ) { }

  getCourse(params?: {[key: string]:any}): Observable<coursesList> {
    const queryParams = {...params};

    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.get(CURL, {
            headers: {
              Authorization: authorizationHeader,
            },
            params: queryParams,
          });
        }
        return of(null);
      }),
      map((data) => parseCoursesList(data)),
    );
  }

}
