import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';

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

  @ViewChildren('tile') tileElements!: QueryList<ElementRef>;
  tileArray: HTMLElement[] = [];
  private animationInterval: any;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.calculateDimensions();
  }

  ngAfterViewInit(): void {
    this.generatePattern();
    this.tileElements.changes.subscribe(c => {
      this.startAnimationInterval(c.map((t: any) => t.nativeElement));
    });
  }

  ngOnDestroy() {
    clearInterval(this.animationInterval);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateDimensions();
    this.generatePattern();
  }

  startAnimationInterval(tileArray: HTMLElement[]) {
    const length = tileArray.length;

    this.animationInterval = setInterval(() => {
      const index = Math.floor(Math.random() * length)
      let tile = tileArray[index];

      if (tile) {
        // Reset de actieve animatie-index en kies een nieuwe willekeurige SVG
        this.renderer.addClass(tile, "animate-rotate");
        // Verwijder de animatie na een korte duur
        setTimeout(() => {
          this.renderer.removeClass(tile, "animate-rotate");
        }, 2000); // Animatieduur van 1.5 seconden
      }

    }, 3000); // Interval van 5 seconden


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
