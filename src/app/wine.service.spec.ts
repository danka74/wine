/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WineService } from './wine.service';

describe('Service: WineService', () => {
  beforeEach(() => {
    addProviders([WineService]);
  });

  it('should ...',
    inject([WineService],
      (service: WineService) => {
        expect(service).toBeTruthy();
      }));
});
