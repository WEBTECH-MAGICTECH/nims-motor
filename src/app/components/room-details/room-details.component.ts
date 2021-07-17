import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room_id: string = '';
  room_name: string = '';
  room_type: string = '';
  room_price: string = '';
  room_description: string = '';
  room_image_1: string = '';
  room_image_2: string = '';
  room_image_3: string = '';

  //Dependency-Injection
  constructor(
    private roomService: RoomService,
    private route: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onPage(){

  }

}
