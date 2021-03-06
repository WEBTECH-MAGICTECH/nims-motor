import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  hide: boolean = true;
  user?: User;

  constructor(
    private userService: UserService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  // get userLogin() {return this.loginForm.controls;}

  onSubmit() {
    if(!this.password || !this.username) {
      alert('Please insert username or password');
    }
    this.userService.userLogin(this.username, this.password)
      .subscribe((user) => {
        this.user = user;
        // console.log(this.user == null ? 'user after login' + this.user : 'not null');
        if(this.user != false) {
          console.log(this.user.user_type);
          if(this.user.user_type == 'Customer')
            this.route.navigate(['main']);
          else this.route.navigate(['adminmain']);
        } else {
          alert('Incorrect username or password')
        }
        // console.log(this.user);
      });
  }
}
