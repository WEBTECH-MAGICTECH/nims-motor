import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get userLogin() {return this.loginForm.controls;}

  onSubmit() {
    // this.userLoginService.UserLogin(this.username.username.value, this.password.password.value)
    console.log('onsubmit click');
  }
}
