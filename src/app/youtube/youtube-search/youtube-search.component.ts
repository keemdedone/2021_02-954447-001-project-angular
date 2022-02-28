import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YoutubeSearchComponent implements OnInit {
  @ViewChild('title') title! : ElementRef;

  channels : any ;

  constructor(
    private youtubeService: YoutubeService,
  ) { }

  ngOnInit(): void {
    this.youtubeService.getResult("").subscribe((data) => {
      this.channels = data.items;
    })
  }

  getData(){
    var title = this.title.nativeElement.value
    this.youtubeService.getResult(title).subscribe((data) => {
      this.channels = data.items;
    })
  }

}
