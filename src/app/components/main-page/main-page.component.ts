import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: User | null;
  // userString: String | null;

  constructor(
    private storageHelper: StorageHelperService,
    private userService: UserService
    ) {
    this.user = this.storageHelper.getUser();
  }

  ngOnInit(): void {
    // console.log(this.user);
    this.test();
  }

  test() {
    console.log(!this.user ? 'it is null' : 'not null');
  }

  onSignOut() {
    this.userService.onLogout();
  }

}
