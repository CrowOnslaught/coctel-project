import { TestBed } from '@angular/core/testing';

import { LocalCocktailsService } from './local-cocktails.service';

describe('LocalCocktailsService', () => {
  let service: LocalCocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
