import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleTokenService } from '../../google-token.service';

@Component({
  selector: 'app-google-authorization',
  templateUrl: './google-authorization.component.html',
  styleUrls: ['./google-authorization.component.scss']
})
export class GoogleAuthorizationComponent implements OnInit {

  errorMsg: string | null = null;

  constructor(
    private readonly tokenService: GoogleTokenService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const queryString = this.route.snapshot.queryParams;
    const state = new URLSearchParams(queryString['state']);

    if(queryString['error']){
      this.errorMsg = queryString['error']
    } else if(queryString['code']){
      this.tokenService.requestAccessToken(queryString['code'],state.get('security_token')).subscribe(
        (result)=>{
          if(result){
            this.router.navigateByUrl(state.get('internal_redirect_uri')!);
          } else {
            this.errorMsg = 'UNKNOW ERROR !!!';
          }
        }
      )
    }
  }

}
