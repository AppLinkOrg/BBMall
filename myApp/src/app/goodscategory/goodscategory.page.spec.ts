import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodscategoryPage } from './goodscategory.page';

describe('GoodscategoryPage', () => {
  let component: GoodscategoryPage;
  let fixture: ComponentFixture<GoodscategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodscategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodscategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
