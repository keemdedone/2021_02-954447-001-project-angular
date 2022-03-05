import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineListPageComponent } from './vaccine-list-page.component';

describe('VaccineListPageComponent', () => {
  let component: VaccineListPageComponent;
  let fixture: ComponentFixture<VaccineListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
