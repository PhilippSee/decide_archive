import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaPrioComponent } from './criteria-prio.component';

describe('CriteriaPrioComponent', () => {
  let component: CriteriaPrioComponent;
  let fixture: ComponentFixture<CriteriaPrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaPrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaPrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
