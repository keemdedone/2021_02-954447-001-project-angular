import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleClassroomService } from '../../google-classroom.service';
import { coursesList } from '../../models';

@Component({
  selector: 'app-google-classroom-list-display',
  templateUrl: './google-classroom-list-display.component.html',
  styleUrls: ['./google-classroom-list-display.component.scss']
})
export class GoogleClassroomListDisplayComponent implements OnInit {
  data$!: Observable<coursesList>;

  constructor(
    private readonly service: GoogleClassroomService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getCourse();
  }

  onItemSelect(id: string):void{
    console.log(id)
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }

}
