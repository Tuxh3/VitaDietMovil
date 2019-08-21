import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesolistoPage } from './pesolisto.page';

describe('PesolistoPage', () => {
  let component: PesolistoPage;
  let fixture: ComponentFixture<PesolistoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesolistoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesolistoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
