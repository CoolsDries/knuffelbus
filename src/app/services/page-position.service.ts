import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagePositionService {

  private positions: { position: number, routePath: string }[] = [];

  constructor(private router: Router) { }

  setPosition(position: number, routePath: string) {
    let newPosition = { position, routePath };
    if (newPosition != this.positions[this.positions.length - 1]) {
      this.positions.push(newPosition);
    }
  }

  returnToPreviousPosition() {
    let previous = this.positions.pop();
    this.router.navigate([previous?.routePath]).then(() => {
      window.scrollTo({
        top: previous?.position,
        left: 0,
        behavior: "instant"
      });
    });
  }
}
