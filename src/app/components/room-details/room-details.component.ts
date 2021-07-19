import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { StorageHelperService } from 'src/app/services/storage-helper.service';

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

  rooms: Room[] = [];
  room: Room = new Room();

  //Dependency-Injection
  constructor(
    private roomService: RoomService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private storageHelper: StorageHelperService
  ) {}

  ngOnInit(): void {
    this.onLoadPage();
  }

  onLoadPage() {
    this.room = this.storageHelper.getCurrentRoom();
    if(this.room == null || this.room == undefined || this.room == '') {
      this.route.navigate(['/main']);
    }
  }

  onClickBook() {
    this.route.navigate(['/booking']);
  }
}
