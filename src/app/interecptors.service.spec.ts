import { TestBed } from '@angular/core/testing';

import { InterecptorsService } from './interecptors.service';

describe('InterecptorsService', () => {
  let service: InterecptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterecptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
