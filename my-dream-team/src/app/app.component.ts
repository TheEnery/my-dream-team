import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  members = [
    {
      name: 'Nazarii Klymok',
      position: 'Design Director',
      image: 'https://i.kym-cdn.com/photos/images/original/002/342/992/8a0.png',
    },
  ];
  title = 'my-dream-team';
}
