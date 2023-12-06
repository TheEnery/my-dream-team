import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members = [
    {
      name: "Kozyra Oleksandr",
      position: "Quality Assurance",
      image: "https://media.giphy.com/media/JlpihM5xjBAkszY14v/giphy.gif"
    },
  ]
  title = 'my-dream-team';
}
