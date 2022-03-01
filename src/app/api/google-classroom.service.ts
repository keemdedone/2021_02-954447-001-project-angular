import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from './google-token.service';
import { coursesList, parseCoursesList } from './models';

const URL = 'https://classroom.googleapis.com/v1/courses';

@Injectable({
  providedIn: 'root'
})
export class GoogleClassroomService {

  constructor(
    private readonly tokenService : GoogleTokenService,
    private readonly http : HttpClient,
  ) { }

  getAll(params?: {[key: string]:any}): Observable<coursesList> {
    const queryParams = {...params};

    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.get(URL, {
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
