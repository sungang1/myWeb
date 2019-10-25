import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SydwcxpComponent } from './sydwcxp.component';

describe('SydwcxpComponent', () => {
  let component: SydwcxpComponent;
  let fixture: ComponentFixture<SydwcxpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SydwcxpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SydwcxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
