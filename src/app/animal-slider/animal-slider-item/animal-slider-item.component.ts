import { Component, Input } from '@angular/core';
import { Animal } from '../../animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-slider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-slider-item.component.html',
  styleUrl: './animal-slider-item.component.css'
})
export class AnimalSliderItemComponent {
  @Input() animal!: Animal;
}
