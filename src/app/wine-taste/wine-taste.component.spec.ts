/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {addProviders, inject} from '@angular/core/testing';
import { WineTasteComponent } from './wine-taste.component';

describe('Component: WineTaste', () => {
  it('should create an instance', () => {
    let component = new WineTasteComponent();
    expect(component).toBeTruthy();
  });
});
