import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { windowTime } from 'rxjs/operators';
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  gender?: string;
  user_type?: string;
  user_image?: string;

  user: User;
  // user: User | null;

  //Dependency-Injection
  constructor(
    private storageHelper: StorageHelperService,
    private userService: UserService,
    private route: Router
  ) {
    this.user = this.storageHelper.getUser();
    this.id = this.user.id;
    this.name = this.user?.name;
    this.email = this.user?.email;
    this.phone = this.user?.phone;
    this.username = this.user?.username;
    this.password = this.user?.password;
    this.gender = this.user?.gender;
    this.user_type = this.user?.user_type;
  }

  ngOnInit(): void {
  }

  onClickUpdate() {
    this.user.name = this.name === this.user.name ? this.user.name : this.name;
    this.user.email = this.email === this.user.email ? this.user.email : this.email;
    this.user.phone = this.phone === this.user.phone ? this.user.phone : this.phone;
    this.user.username = this.username === this.user.username ? this.user.username : this.username;
    this.user.password = this.password === this.user.password ? this.user.password : this.password;
    this.userService.updateUser(this.id?.toString(), this.user).subscribe(
      user => {
        if (!user) {
          alert('Update Failed. Please try again')
        } else {
          alert('Your profile has been updated successfully!')
        }
      }
    );

    // console.log('After set')
    // console.log(this.user)
    // console.log(this.name)
    // console.log(this.email)
    // console.log(this.phone)
    // console.log(this.username)
    // console.log(this.password)
    // console.log(this.gender)
    // console.log(this.user_type)
  }

}
