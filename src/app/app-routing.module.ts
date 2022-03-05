import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidModule } from './covid/covid.module';

const routes: Routes = [
  { path: '', redirectTo: 'covid', pathMatch: 'full' },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then((m) => CovidModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
