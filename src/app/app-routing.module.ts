import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'youtube',
    pathMatch:'full',
  },
  {
    path:'youtube',loadChildren: () => import('./youtube/youtube.module').then((x) => x.YoutubeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
