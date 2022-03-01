import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClassroomListComponent } from './google-classroom-list.component';

describe('GoogleClassroomListComponent', () => {
  let component: GoogleClassroomListComponent;
  let fixture: ComponentFixture<GoogleClassroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClassroomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClassroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
