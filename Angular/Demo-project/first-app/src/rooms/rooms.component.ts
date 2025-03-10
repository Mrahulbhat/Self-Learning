import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Room{
  totalRooms:number;
  availableRooms:number;
  bookedRooms:number;
}

export interface RoomList{
  roomtype:string;
  amenities:string;
  price:number;
  checkintime:Date;
  checkouttime:Date;
}

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent{

  Hotelname = "Ocean Pearl";
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList:RoomList[] = [
    {
      roomtype:'Standard Room',
      amenities:"basic",
      price:100,
      checkintime:new Date(2025,10,1,10,30,0,0),
      checkouttime:new Date(2025,10,2,10,30,0,0)

    },
    {
      roomtype:'Semi-Deluxe Room',
      amenities:"soft-bed, AC",
      price:100,
      checkintime:new Date(2025,9,1,10,30,0,0),
      checkouttime:new Date(2025,9,2,10,30,0,0)

    },
    {
      roomtype:'Deluxe Room',
      amenities:"Ultra soft bed, AC, Bath Tub ",
      price:100,
      checkintime:new Date(2025,8,1,8,30,0,0),
      checkouttime:new Date(2025,8,2,10,30,0,0)
    }
  ];
};