import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAnimationComponent } from './open-animation.component';

describe('OpenAnimationComponent', () => {
  let component: OpenAnimationComponent;
  let fixture: ComponentFixture<OpenAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
