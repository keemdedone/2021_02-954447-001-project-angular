import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './display/youtube/youtube.component';
import { YoutubeSearchDisplayComponent } from './display/youtube-search/youtube-search-display/youtube-search-display.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';


@NgModule({
  declarations: [
    YoutubeComponent,
    YoutubeSearchComponent,
    YoutubeSearchDisplayComponent,

  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
