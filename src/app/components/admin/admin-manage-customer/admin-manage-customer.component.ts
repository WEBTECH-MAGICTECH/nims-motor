import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-customer',
  templateUrl: './admin-manage-customer.component.html',
  styleUrls: ['./admin-manage-customer.component.css']
})
export class AdminManageCustomerComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
