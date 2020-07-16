import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRatingComponent } from './option-rating.component';

describe('OptionRatingComponent', () => {
  let component: OptionRatingComponent;
  let fixture: ComponentFixture<OptionRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
