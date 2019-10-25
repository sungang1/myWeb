import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxyscxpComponent } from './cxyscxp.component';

describe('CxyscxpComponent', () => {
  let component: CxyscxpComponent;
  let fixture: ComponentFixture<CxyscxpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxyscxpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxyscxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
