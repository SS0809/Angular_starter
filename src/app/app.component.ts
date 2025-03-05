import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  // template: `<h2>Saurabh</h2>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username = ""; //two way binding
  imgSrc = 'new.png';//property binding
  title = 'ANGULAR STARTER';
  url = 'https://www.bridgelabz.com';

  ngOnInit() {
    this.title = 'ANGULAR STARTER By Saurabh';
  }

  onClick() {
    console.log('Button Clicked');
    window.open(this.url, '_blank');
  }
}
