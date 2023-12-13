import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members = [
    {
      name: "Dmytro Kovalenko",
      position: "(not) System Architect",
      image: "https://avatars.githubusercontent.com/u/87442560?v=4",
    },
  ]
  title = 'my-dream-team';
}
