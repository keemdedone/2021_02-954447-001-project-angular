import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleClassroomComponent } from './api/google-classroom/google-classroom/google-classroom.component';
import { GoogleClassroomListDisplayComponent } from './api/display/google-classroom-list-display/google-classroom-list-display.component';
import { GoogleClassroomCreateDisplayComponent } from './api/display/google-classroom-create-display/google-classroom-create-display.component';
import { environment } from 'src/environments/environment';
import { GoogleConfigurationToken } from './api/models';
import { CovidListComponent } from './covid/covid-list/covid-list.component';
import { CovidListPageComponent } from './covid/covid-list-page/covid-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleClassroomComponent,
    GoogleClassroomListDisplayComponent,
    GoogleClassroomCreateDisplayComponent,
    CovidListComponent,
    CovidListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: GoogleConfigurationToken,
      useValue: environment.googleConfiguration,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
