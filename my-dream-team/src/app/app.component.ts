import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members = [
    {
      name: "Member name",
      position: "Member position",
      image: "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png"
    },
  ]
  title = 'my-dream-team';
}
