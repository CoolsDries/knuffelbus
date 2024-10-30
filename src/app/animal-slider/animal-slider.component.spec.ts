import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSliderComponent } from './animal-slider.component';

describe('AnimalSliderComponent', () => {
  let component: AnimalSliderComponent;
  let fixture: ComponentFixture<AnimalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
