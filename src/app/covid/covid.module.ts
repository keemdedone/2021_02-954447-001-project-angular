import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { CovidRoutingModule } from './covid-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { CovidListComponent } from './covid-list/covid-list.component';
import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CovidDayComponent } from './covid-day/covid-day.component';
import { CovidDayPageComponent } from './covid-day-page/covid-day-page.component';
import { CovidLineChartComponent } from './covid-line-chart/covid-line-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CovidTotalComponent } from './covid-total/covid-total.component';
import { CovidTotalPageComponent } from './covid-total-page/covid-total-page.component';
import { VaccineFormComponent } from './vaccine-form/vaccine-form.component';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineListPageComponent } from './vaccine-list-page/vaccine-list-page.component';

@NgModule({
  declarations: [
    CovidListComponent,
    CovidListPageComponent,
    CovidDayComponent,
    CovidDayPageComponent,
    CovidLineChartComponent,
    CovidTotalComponent,
    CovidTotalPageComponent,
    VaccineFormComponent,
    VaccineListComponent,
    VaccineListPageComponent,
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    NgApexchartsModule,
  ],
})
export class CovidModule {}
