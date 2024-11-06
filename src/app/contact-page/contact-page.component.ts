import { Component } from '@angular/core';
import { PagePositionService } from '../services/page-position.service';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TileComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  constructor(private pagePosition: PagePositionService) { }

  closeNavigation() {
    this.pagePosition.returnToPreviousPosition()
  }
}
