import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = '';
  email: string ='';
  phone: string = '';
  username: string = '';
  password: string = '';
  gender: string = '';
  user_type: string = '';

  constructor() {

   }

  ngOnInit(): void {
  }


}
