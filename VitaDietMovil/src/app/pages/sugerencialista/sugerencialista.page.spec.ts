import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerencialistaPage } from './sugerencialista.page';

describe('SugerencialistaPage', () => {
  let component: SugerencialistaPage;
  let fixture: ComponentFixture<SugerencialistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerencialistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerencialistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
