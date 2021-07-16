import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: string = '';
  email: string ='';
  phone: string = '';
  username: string = '';
  password: string = '';
  gender: string = '';
  user_type: string = '';

  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name || !this.email || !this.phone  || !this.username || !this.password || !this.gender || !this.user_type) {
      alert('Please complete the sign up details');
    }
    else {
      this.user.name = this.name;
      this.user.email = this.email;
      this.user.phone = this.phone;
      this.user.username = this.username;
      this.user.password = this.password;
      this.user.gender = this.gender ;
      this.user.user_type = this.user_type;
      this.user.user_image = '';
      // console.log(this.user);

      this.userService.createUser(this.user).subscribe(
        user => {
          this.user = user;
          console.log(this.user);
          if(this.user != false || this.user != null){
            this.route.navigate(['signin']);
          }
          else {
            alert('Sign Up Failed, Please check your details');
          }
        }
      );
    }
  }


}
