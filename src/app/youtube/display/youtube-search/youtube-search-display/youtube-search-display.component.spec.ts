import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchDisplayComponent } from './youtube-search-display.component';

describe('YoutubeSearchDisplayComponent', () => {
  let component: YoutubeSearchDisplayComponent;
  let fixture: ComponentFixture<YoutubeSearchDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeSearchDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSearchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
