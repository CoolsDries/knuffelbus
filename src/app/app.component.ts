import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenAnimationComponent } from './open-animation/open-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpenAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'knuffelbus';

}
