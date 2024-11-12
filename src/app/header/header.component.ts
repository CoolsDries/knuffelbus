import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PagePositionService } from '../services/page-position.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavigationRoute: boolean = false;

  constructor(private router: Router, private pagePosition: PagePositionService, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Listen to router changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if header is on the menu page
        this.isNavigationRoute = event.urlAfterRedirects === '/nav';
      }
    });
  }

  openNavigation(hamburger: HTMLElement, circle: HTMLElement) {
    if (hamburger instanceof HTMLElement && circle instanceof HTMLElement) {
      this.renderer.addClass(hamburger, "hamburger-animation");
      this.renderer.addClass(circle, "circle-animation");

      setTimeout(() => {
        this.pagePosition.setPosition(window.scrollY, this.router.url)
        this.router.navigate(['/nav']);

        this.renderer.removeClass(hamburger, "hamburger-animation");
        this.renderer.removeClass(circle, "circle-animation");
      }, 600); // animation duration
    }
  }

}
