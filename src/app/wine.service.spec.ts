/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WineServiceService } from './wine-service.service';

describe('Service: WineService', () => {
  beforeEach(() => {
    addProviders([WineServiceService]);
  });

  it('should ...',
    inject([WineServiceService],
      (service: WineServiceService) => {
        expect(service).toBeTruthy();
      }));
});
