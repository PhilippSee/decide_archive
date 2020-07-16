import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaInputComponent } from './criteria-input.component';

describe('CriteriaInputComponent', () => {
  let component: CriteriaInputComponent;
  let fixture: ComponentFixture<CriteriaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
