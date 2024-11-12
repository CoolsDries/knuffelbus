import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagePositionService } from '../../services/page-position.service';

@Component({
  selector: 'app-navigation-page',
  standalone: true,
  imports: [],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.css'
})
export class NavigationPageComponent {
  constructor(private router: Router, private pagePosition: PagePositionService) { }

  closeNavigation(hamburger: HTMLElement, circle: HTMLElement) {
    this.pagePosition.returnToPreviousPosition()
  }

  navigateTo(route: string, sectionId: string) {
    this.router.navigate(['/' + route]).then(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" })
      }
    });
  }
}
