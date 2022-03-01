import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationComponent } from './display/google-authorization/google-authorization.component';
import { GoogleClassroomListDisplayComponent } from './display/google-classroom-list-display/google-classroom-list-display.component';
import { GoogleClassroomComponent } from './display/google-classroom/google-classroom.component';

const routes: Routes = [
  {
    path:'authorization',
    component: GoogleAuthorizationComponent,
  },
  {
    path:'',
    redirectTo:'classroom',
    pathMatch:'full',
  },
  {
    path:'classroom',
    component: GoogleClassroomComponent,
    children: [
      {
        path:'',
        redirectTo: 'list',
        pathMatch:'full',
      },
      {
        path:'list',
        component: GoogleClassroomListDisplayComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
