import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path:'list',
    component: CovidListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
