import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PagePositionService } from './services/page-position.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'knuffelbus';

  private currentUrl: string = '/';

  constructor(private router: Router, private pagePosition: PagePositionService) { }

  ngOnInit(): void {
    // Listen to router changes
    this.router.events.subscribe(event => {
      
      if (event instanceof NavigationStart) {
        // Save previous position
        this.pagePosition.setPosition(window.scrollY, this.currentUrl)
      } else if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }
}
