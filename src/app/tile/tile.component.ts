import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  image: string = "";
  side: boolean = Math.random() < 0.5;

  // list of all images in background
  backgroundImages = [
    { src: 'lineart/konijn.svg', class: 'konijn' },
    { src: 'lineart/hond_groot.svg', class: 'hond_groot' },
    { src: 'lineart/kip.svg', class: 'kip' },
    { src: 'lineart/kat.svg', class: 'kat' },
    { src: 'lineart/hond_klein.svg', class: 'hond_klein' },
    { src: 'lineart/hamster.svg', class: 'hamster' },
  ];

  ngOnInit(): void {
    const index = Math.floor(Math.random() * this.backgroundImages.length)
    this.image = this.backgroundImages[index].src + "#id";
  }

}
