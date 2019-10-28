import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumComponent } from './quantum.component';

describe('QuantumComponent', () => {
  let component: QuantumComponent;
  let fixture: ComponentFixture<QuantumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
