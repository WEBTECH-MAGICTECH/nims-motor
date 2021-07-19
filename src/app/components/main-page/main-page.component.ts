import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { UserService } from 'src/app/services/user.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: User | null;
  // userString: String | null;

  room_id: string = '';
  room_name: string = '';
  room_type: string = '';
  room_price: string = '';
  room_description: string = '';
  room_image_1: string = '';

  rooms: Room[] = [];

  @ViewChild('room') public room?:ElementRef;

  //Dependency-Injection
  constructor(
    private storageHelper: StorageHelperService,
    private userService: UserService,
    private roomService: RoomService,
    private route: Router,
    private viewportScroller: ViewportScroller
    ) {
    this.user = this.storageHelper.getUser();
  }

  ngOnInit(): void {
    this.onLoadPage();
  }

  moveToRooms() {
    document.getElementById("rooms")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  moveToAbout() {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onSignOut() {
    this.userService.onLogout();
  }

  onLoadPage() {
    this.roomService.getRoom().subscribe(
      rooms => {
        this.rooms = rooms;
        console.log(this.rooms);

      }
    );
  }

  onClickBook(room: Room) {
    if (!this.user) {
      alert('Please login to book');
      this.route.navigate(['/signin']);
    }
    else {
      this.route.navigate(['/roomdetails']);
      localStorage.setItem('currentRoom', JSON.stringify(room));
      this.storageHelper.room = room;
    }
  }

}
