import { Component } from '@angular/core';
import { PagePositionService } from '../services/page-position.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  constructor(private pagePosition: PagePositionService) { }

  closeNavigation() {
    this.pagePosition.returnToPreviousPosition()
  }
}
