import { TestBed } from '@angular/core/testing';

import { ProductsServiceService } from './cart.service';

describe('ProductsServiceService', () => {
  let service: ProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
