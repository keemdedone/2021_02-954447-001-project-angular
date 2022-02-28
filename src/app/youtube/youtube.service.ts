import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(
    private http: HttpClient,
  ) { }

  getResult(title:any): Observable<any>{
    const API_KEY = "AIzaSyBgang6F6d_k92M6aGu_7QI7MOSeXwSiu8";
    const URL =  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + title + "&type=video&key="+ API_KEY +"&maxResults=25"
    return this.http.get<any>(URL)
  }
}
