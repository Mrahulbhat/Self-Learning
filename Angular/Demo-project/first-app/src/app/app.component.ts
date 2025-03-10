import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-root',
  imports: [RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
