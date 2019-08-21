import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaPage } from './sugerencia.page';

describe('SugerenciaPage', () => {
  let component: SugerenciaPage;
  let fixture: ComponentFixture<SugerenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
