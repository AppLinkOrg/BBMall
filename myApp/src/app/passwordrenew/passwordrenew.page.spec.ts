import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrenewPage } from './passwordrenew.page';

describe('PasswordrenewPage', () => {
  let component: PasswordrenewPage;
  let fixture: ComponentFixture<PasswordrenewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordrenewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrenewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
