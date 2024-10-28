import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPatternComponent } from './background-pattern.component';

describe('BackgroundPatternComponent', () => {
  let component: BackgroundPatternComponent;
  let fixture: ComponentFixture<BackgroundPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
