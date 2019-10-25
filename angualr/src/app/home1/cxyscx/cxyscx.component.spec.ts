import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxyscxComponent } from './cxyscx.component';

describe('CxyscxComponent', () => {
  let component: CxyscxComponent;
  let fixture: ComponentFixture<CxyscxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxyscxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxyscxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
