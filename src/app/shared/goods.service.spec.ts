import { TestBed, inject } from '@angular/core/testing';

import { GoodService } from './goods.service';

describe('GoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodService]
    });
  });

  it('should be created', inject([GoodService], (service: GoodService) => {
    expect(service).toBeTruthy();
  }));
});
