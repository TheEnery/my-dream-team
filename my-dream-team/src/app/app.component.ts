import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  members = [
    {
      name: "Dmytro Kovalenko",
      position: "System Architect",
      image: "https://avatars.githubusercontent.com/u/87442560?v=4",
    },
    {
      name: 'Nazarii Klymok',
      position: 'Design Director',
      image: 'https://i.kym-cdn.com/photos/images/original/002/342/992/8a0.png',
    },
    {
      name: "Kozyra Oleksandr",
      position: "Quality Assurance",
      image: "https://media.giphy.com/media/JlpihM5xjBAkszY14v/giphy.gif"
    },
    {
      name: "Renat Kovalov",
      position: "Who am I?",
      image: "https://avatars.githubusercontent.com/u/87442560?v=4",
    },
  ];
  title = 'my-dream-team';
}
