import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClassroomViewDisplayComponent } from './google-classroom-view-display.component';

describe('GoogleClassroomViewDisplayComponent', () => {
  let component: GoogleClassroomViewDisplayComponent;
  let fixture: ComponentFixture<GoogleClassroomViewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClassroomViewDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClassroomViewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
