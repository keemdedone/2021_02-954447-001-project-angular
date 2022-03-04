import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { coursesList } from '../../models';

@Component({
  selector: 'app-google-classroom-list',
  templateUrl: './google-classroom-list.component.html',
  styleUrls: ['./google-classroom-list.component.scss']
})
export class GoogleClassroomListComponent implements OnInit {
  @Input() data: coursesList | null = null ;
  @Output() itemSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    return
  }

  onItemClick(courseId:string): void {
    this.itemSelect.emit(courseId);
  }

}
