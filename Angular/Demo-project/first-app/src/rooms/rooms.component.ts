import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  Hotelname = "Ocean Pearl"
  rooms = [
    {
      category: "Standard",
      price: 1000
    },
    {
      category: "Semi-Luxury",
      price: 2000
    },
    {
      category: "Full-Luxury",
      price: 3000
    }
  ];

  hideRooms = false;

  toggle(){
    this.hideRooms=!this.hideRooms;
  }
}
