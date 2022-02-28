import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'covid', pathMatch: 'full' },
  {
    path:'api',
    loadChildren: () => import('./api/api.module').then((m) => m.ApiModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then((m) => m.CovidModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
