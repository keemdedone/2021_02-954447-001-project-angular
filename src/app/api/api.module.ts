import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { GoogleClassroomComponent } from './display/google-classroom/google-classroom.component';
import { GoogleClassroomListDisplayComponent } from './display/google-classroom-list-display/google-classroom-list-display.component';
import { GoogleClassroomCreateDisplayComponent } from './display/google-classroom-create-display/google-classroom-create-display.component';
import { GoogleClassroomListComponent } from './google-classroom/google-classroom-list/google-classroom-list.component';
import { GoogleAuthorizationComponent } from './display/google-authorization/google-authorization.component';


@NgModule({
  declarations: [
    GoogleClassroomComponent,
    GoogleClassroomListComponent,
    GoogleClassroomListDisplayComponent,
    GoogleClassroomCreateDisplayComponent,
    GoogleAuthorizationComponent,
  ],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
