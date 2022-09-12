import { TestBed } from '@angular/core/testing';

import { ProductsService } from './productsts.service';

describe('ProductstsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
