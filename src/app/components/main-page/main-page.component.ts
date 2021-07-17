import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { UserService } from 'src/app/services/user.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { Router } from '@angular/router';

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

  //Dependency-Injection
  constructor(
    private storageHelper: StorageHelperService,
    private userService: UserService,
    private roomService: RoomService,
    private route: Router
    ) {
    this.user = this.storageHelper.getUser();

  }

  ngOnInit(): void {
    // console.log(this.user);
    // this.test();
    this.onLoadPage();
  }

  test() {
    console.log(!this.user ? 'it is null' : 'not null');
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

  onSubmit(){

  }

}
