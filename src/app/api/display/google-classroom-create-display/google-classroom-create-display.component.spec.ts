import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClassroomCreateDisplayComponent } from './google-classroom-create-display.component';

describe('GoogleClassroomCreateDisplayComponent', () => {
  let component: GoogleClassroomCreateDisplayComponent;
  let fixture: ComponentFixture<GoogleClassroomCreateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClassroomCreateDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClassroomCreateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
