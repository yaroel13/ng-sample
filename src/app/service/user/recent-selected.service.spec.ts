import { TestBed } from '@angular/core/testing';

import { RecentSelectedService } from './recent-selected.service';

describe('RecentSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentSelectedService = TestBed.get(RecentSelectedService);
    expect(service).toBeTruthy();
  });
});
