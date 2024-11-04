import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagePositionService {

  private positions: { position: number, routePath: string }[] = [];

  setPosition(position: number, routePath: string) {
    let newPosition = { position, routePath };
    if (newPosition != this.positions[this.positions.length - 1]) {
      this.positions.push(newPosition);
    }
    console.log(this.positions)

  }

  getPosition(): { position: number, routePath: string } | undefined {
    return this.positions.pop();
  }
}
