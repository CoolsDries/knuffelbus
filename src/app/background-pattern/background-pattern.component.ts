import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-background-pattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-pattern.component.html',
  styleUrl: './background-pattern.component.css'
})
export class BackgroundPatternComponent {
  @Input() colorPrimary: string = "#F9A65F";
  @Input() colorSecondary: string = "#F26A48";

  // list of all images in background
  backgroundImages = [
    { src: 'lineart/konijn.svg', class: 'konijn' },
    { src: 'lineart/hond_groot.svg', class: 'hond_groot' },
    { src: 'lineart/kip.svg', class: 'kip' },
    { src: 'lineart/kat.svg', class: 'kat' },
    { src: 'lineart/hond_klein.svg', class: 'hond_klein' },
    { src: 'lineart/hamster.svg', class: 'hamster' },
  ];
  
  // height and width of images
  tileSize: number = 0;

  // Images in pattern
  patternDensity: number = 20

  // matrix that holds the images
  rows: any[] = [];

  // width and height of the container that needs a background
  containerWidth: number = 0;
  containerHeight: number = 0;

  // query to fetch all the elements with tile tag
  @ViewChildren('tile') tileElements!: QueryList<ElementRef>;
  // array that will hold query results
  tileArray: HTMLElement[] = [];
  // property to start and stop animations
  private animationInterval: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.calculateDimensions();
    this.generatePattern();
  }

  ngAfterViewInit(): void {
    // Subscribe to query and map to HTML element so changes can be made
    this.tileElements.changes.subscribe(c => {
      clearInterval(this.animationInterval);
      // Start animation interval with new elements
      this.startAnimationInterval(c.map((t: any) => t.nativeElement));
    });
  }

  ngOnDestroy() {
    clearInterval(this.animationInterval);
  }

  @HostListener('window:resize')
  onResize() {
    // recalculate and regenerate on window resize
    this.calculateDimensions();
    this.generatePattern();
  }

  // Start animations with given HTML elements
  startAnimationInterval(tileArray: HTMLElement[]) {
    const length = tileArray.length;

    this.animationInterval = setInterval(() => {
      // random index from array
      const index = Math.floor(Math.random() * length)
      let tile = tileArray[index];

      if (tile) {
        // give element animation css class
        this.renderer.addClass(tile, "animate-rotate");

        setTimeout(() => {
          // remove given class
          this.renderer.removeClass(tile, "animate-rotate");
        }, 2000); // animation duration
      }

    }, 2000); // interval time


  }

  // renews dimensions
  private calculateDimensions(): void {
    const myElement = document.getElementById('wrapper');

    if (myElement) {
      const container = myElement.getBoundingClientRect();
      this.containerWidth = container.width;
      this.containerHeight = container.height;
      // TODO: add calculation to define tile size
      let surface = this.containerHeight * this.containerWidth
      let imageSurface = surface/this.patternDensity;
      this.tileSize = Math.sqrt(imageSurface);
    }

  }

  private generatePattern(): void {
    // Tiles needed for 1 row + 1 extra due to shift
    const tilesPerRow = Math.ceil(this.containerWidth / this.tileSize);
    // rows needed to file container
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
}
