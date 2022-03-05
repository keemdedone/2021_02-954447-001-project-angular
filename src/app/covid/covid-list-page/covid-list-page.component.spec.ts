import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidListPageComponent } from './covid-list-page.component';

describe('ListPageComponent', () => {
  let component: CovidListPageComponent;
  let fixture: ComponentFixture<CovidListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
