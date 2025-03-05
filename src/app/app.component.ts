import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  standalone: true,
  // template: `<h2>Saurabh</h2>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username: string = ""; //two way binding
  usernameerror: string = ""; //two way binding
  imgSrc = 'new.png';//property binding
  title = 'ANGULAR STARTER By ';
  url = 'https://www.bridgelabz.com';

  onClick($event: any) {
    console.log('Button Clicked'+$event);
    window.open(this.url, '_blank');
  }

  onEvent() {
    // Ensure the userName starts with a capital letter and has a minimum of 3 letters
    const regex = /^[A-Z][A-Za-z]{2,}$/;
    this.usernameerror = regex.test(this.username) ? '' : 'Invalid UserName';
  }
}
