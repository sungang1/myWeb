import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwbaComponent } from './dwba.component';

describe('DwbaComponent', () => {
  let component: DwbaComponent;
  let fixture: ComponentFixture<DwbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
