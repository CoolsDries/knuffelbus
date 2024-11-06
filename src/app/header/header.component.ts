import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private router: Router, private pagePosition: PagePositionService) { }

  ngOnInit(): void {
    // Listen to router changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if header is on the menu page
        this.isNavigationRoute = event.urlAfterRedirects === '/nav';
      }
    });
  }

  openNavigation() {
      this.pagePosition.setPosition(window.scrollY, this.router.url)
      this.router.navigate(['/nav']);
  }

}
