import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-pattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-pattern.component.html',
  styleUrl: './background-pattern.component.css'
})
export class BackgroundPatternComponent {
  backgroundImages = [
    { src: 'lineart/konijn.svg', class: 'konijn' },
    { src: 'lineart/hond_groot.svg', class: 'hond_groot' },
    { src: 'lineart/kip.svg', class: 'kip' },
    { src: 'lineart/kat.svg', class: 'kat' },
    { src: 'lineart/hond_klein.svg', class: 'hond_klein' },
    { src: 'lineart/hamster.svg', class: 'hamster' },
  ];
  tileSize: number = 0;
  rows: any[] = [];

  containerWidth: number = 0;
  containerHeight: number = 0;
  
  ngOnInit(): void {
    this.calculateDimensions();
    this.generatePattern();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateDimensions();
    this.generatePattern();
  }

  // renews dimensions
  private calculateDimensions(): void {
    const myElement = document.getElementById('wrapper');

    if (myElement) {
      const container = myElement.getBoundingClientRect();
      this.containerWidth = container.width;
      this.containerHeight = container.height;
      this.tileSize = 50;
    }

  }

  private generatePattern(): void {
    const tilesPerRow = Math.ceil(this.containerWidth / this.tileSize) + 1;
    const rowCount = Math.ceil(this.containerHeight / this.tileSize);

    // Fill first row with images
    let row = [];
    for (let i = 0; i < tilesPerRow; i++) {
      let value = this.backgroundImages[i % 6];
      row[i] = { src: value.src, class: value.class };
    }

    // Repeat row for full height and shift each row
    for (let i = 0; i < rowCount; i++) {
      this.shift(row, 2);
      // assign copy
      this.rows[i] = [...row];
    }

    console.log(this.containerHeight)
    console.log(this.containerWidth)
    console.log(this.tileSize)
    console.log(tilesPerRow)
    console.log(rowCount)
    console.log(this.rows)

  }

  private shift(array: any[], amount: number) {
    for (let i = 0; i < amount; i++) {
      array.push(array.shift());
    };
  }

  getTileSizeHalf() {
    return this.tileSize / 2;
  }
}
