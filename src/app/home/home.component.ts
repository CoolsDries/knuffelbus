import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackgroundPatternComponent } from '../background-pattern/background-pattern.component';
import { AnimalSliderComponent } from '../animal-slider/animal-slider.component';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BackgroundPatternComponent, AnimalSliderComponent, TileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  backgroundImages = [
    { src: 'lineart/konijn.svg', id: 'konijn' },
    { src: 'lineart/hond_groot.svg', id: 'hond_groot' },
    { src: 'lineart/kip.svg', id: 'kip' },
    { src: 'lineart/kat.svg', id: 'kat' },
    { src: 'lineart/hond_klein.svg', id: 'hond_klein' },
    { src: 'lineart/hamster.svg', id: 'hamster' },
  ];

  // Holds  index of active svg
  activeIndex: number = -1; 
  private animationInterval: any;

  ngOnInit() {
    // this.startAnimationInterval();
  }

  ngOnDestroy() {
    clearInterval(this.animationInterval);
  }

  startAnimationInterval() {
    this.animationInterval = setInterval(() => {
      // Reset de actieve animatie-index en kies een nieuwe willekeurige SVG
      this.activeIndex = Math.floor(Math.random() * this.backgroundImages.length);
      
      // Verwijder de animatie na een korte duur
      setTimeout(() => {
        this.activeIndex = -1;
      }, 1500); // Animatieduur van 1.5 seconden
    }, 5000); // Interval van 5 seconden
  }
}
