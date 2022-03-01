import { TestBed } from '@angular/core/testing';

import { GoogleClassroomService } from './google-classroom.service';

describe('GoogleClassroomService', () => {
  let service: GoogleClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
