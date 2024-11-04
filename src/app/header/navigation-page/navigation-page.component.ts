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
  constructor(private router: Router, private pagePosition: PagePositionService) {}

  closeNavigation() {
    let previous = this.pagePosition.getPosition();
    this.router.navigate([previous?.routePath]).then(() => {
      window.scrollTo({
        top: previous?.position,
        left: 0,
        behavior: "instant"
      });
    });
  }

  navigateTo(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      this.closeNavigation();
    });
  }
}
