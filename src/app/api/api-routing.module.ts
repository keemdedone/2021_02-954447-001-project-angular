import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationComponent } from './display/google-authorization/google-authorization.component';
import { GoogleClassroomListDisplayComponent } from './display/google-classroom-list-display/google-classroom-list-display.component';
import { GoogleClassroomViewDisplayComponent } from './display/google-classroom-view-display/google-classroom-view-display.component';
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
      {
        path:'list/:id',
        component: GoogleClassroomViewDisplayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
