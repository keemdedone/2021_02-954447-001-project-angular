import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleTokenService } from '../../google-token.service';

@Component({
  selector: 'app-google-classroom',
  templateUrl: './google-classroom.component.html',
  styleUrls: ['./google-classroom.component.scss']
})
export class GoogleClassroomComponent implements OnInit {
  tokenReady$!: Observable<boolean | null>;
  authorizationLinks$!: Observable<string>;

  constructor(
    private readonly TokenService: GoogleTokenService,
    ) {}

  ngOnInit(): void {
    this.tokenReady$ = this.TokenService.tokenReady$;
    this.authorizationLinks$ = this.TokenService.getAuthorizationLink();
  }

}
