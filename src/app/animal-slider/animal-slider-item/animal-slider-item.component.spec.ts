import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSliderItemComponent } from './animal-slider-item.component';

describe('AnimalSliderItemComponent', () => {
  let component: AnimalSliderItemComponent;
  let fixture: ComponentFixture<AnimalSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalSliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
