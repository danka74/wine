/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { WineCardComponent } from './wine-card.component';

describe('Component: WineCard', () => {
  it('should create an instance', () => {
    let component = new WineCardComponent();
    expect(component).toBeTruthy();
  });
});
