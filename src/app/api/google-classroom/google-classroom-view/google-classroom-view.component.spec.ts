import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClassroomViewComponent } from './google-classroom-view.component';

describe('GoogleClassroomViewComponent', () => {
  let component: GoogleClassroomViewComponent;
  let fixture: ComponentFixture<GoogleClassroomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClassroomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClassroomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
