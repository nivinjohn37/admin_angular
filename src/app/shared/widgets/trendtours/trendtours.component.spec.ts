import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendtoursComponent } from './trendtours.component';

describe('TrendtoursComponent', () => {
  let component: TrendtoursComponent;
  let fixture: ComponentFixture<TrendtoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendtoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendtoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
