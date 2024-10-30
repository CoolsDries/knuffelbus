import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../services/animal.service';
import { CommonModule } from '@angular/common';
import { AnimalSliderItemComponent } from './animal-slider-item/animal-slider-item.component';

@Component({
  selector: 'app-animal-slider',
  standalone: true,
  imports: [CommonModule, AnimalSliderItemComponent],
  templateUrl: './animal-slider.component.html',
  styleUrl: './animal-slider.component.css'
})
export class AnimalSliderComponent {
  animals: Animal[] = [];
  currentIndex = 3;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animalService.getAnimals();
  }

  previous() {
    this.currentIndex = (this.currentIndex + 6 - 1) % this.animals.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.animals.length;
  }
}
