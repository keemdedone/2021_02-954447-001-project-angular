import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleClassroomComponent } from './api/display/google-classroom/google-classroom.component';
import { GoogleClassroomListDisplayComponent } from './api/display/google-classroom-list-display/google-classroom-list-display.component';
import { GoogleClassroomCreateDisplayComponent } from './api/display/google-classroom-create-display/google-classroom-create-display.component';
import { environment } from 'src/environments/environment';
import { GoogleConfigurationToken } from './api/models';
import { CovidListComponent } from './covid/covid-all/covid-list/covid-list.component';
import { CovidListPageComponent } from './covid/covid-all/covid-list-page/covid-list-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PortalModule } from '@angular/cdk/portal';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, NavMenuComponent],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    PortalModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
