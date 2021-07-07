import { TestBed } from '@angular/core/testing';

import { RestaurantTypeService } from './restaurant-type.service';

describe('RestaurantTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantTypeService = TestBed.get(RestaurantTypeService);
    expect(service).toBeTruthy();
  });
});
