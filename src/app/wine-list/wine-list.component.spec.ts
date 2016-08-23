/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { WineListComponent } from './wine-list.component';

describe('Component: WineList', () => {
  it('should create an instance', () => {
    let component = new WineListComponent();
    expect(component).toBeTruthy();
  });
});
