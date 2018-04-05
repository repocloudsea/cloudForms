import { TestBed, inject } from '@angular/core/testing';

import { Navigation.ServiceService } from './navigation.service.service';

describe('Navigation.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Navigation.ServiceService]
    });
  });

  it('should be created', inject([Navigation.ServiceService], (service: Navigation.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
