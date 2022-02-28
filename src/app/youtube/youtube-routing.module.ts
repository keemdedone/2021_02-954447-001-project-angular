import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeSearchDisplayComponent } from './display/youtube-search/youtube-search-display/youtube-search-display.component';
import { YoutubeComponent } from './display/youtube/youtube.component';

const routes: Routes = [
  {
    path:'',
    component:YoutubeComponent,
    children:[
      {
        path:'',
        redirectTo:'search',
        pathMatch:'full',
      },
      {
        path:'search',
        component:YoutubeSearchDisplayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
