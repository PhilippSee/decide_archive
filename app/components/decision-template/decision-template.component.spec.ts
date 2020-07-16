import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionTemplateComponent } from './decision-template.component';

describe('DecisionTemplateComponent', () => {
  let component: DecisionTemplateComponent;
  let fixture: ComponentFixture<DecisionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
