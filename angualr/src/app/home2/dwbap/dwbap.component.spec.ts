import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwbapComponent } from './dwbap.component';

describe('DwbapComponent', () => {
  let component: DwbapComponent;
  let fixture: ComponentFixture<DwbapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwbapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwbapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
