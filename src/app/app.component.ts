import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // template: `<h2>Saurabh</h2>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgSrc = 'new.png';
  title = 'ANGULAR STARTER By Saurabh';
}
