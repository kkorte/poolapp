/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PoolsComponent } from './pools.component';

describe('Component: Pools', () => {
  it('should create an instance', () => {
    let component = new PoolsComponent();
    expect(component).toBeTruthy();
  });
});
