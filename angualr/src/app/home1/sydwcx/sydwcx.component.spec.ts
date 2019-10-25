import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SydwcxComponent } from './sydwcx.component';

describe('SydwcxComponent', () => {
  let component: SydwcxComponent;
  let fixture: ComponentFixture<SydwcxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SydwcxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SydwcxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
