import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClassroomListDisplayComponent } from './google-classroom-list-display.component';

describe('GoogleClassroomListDisplayComponent', () => {
  let component: GoogleClassroomListDisplayComponent;
  let fixture: ComponentFixture<GoogleClassroomListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClassroomListDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClassroomListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
