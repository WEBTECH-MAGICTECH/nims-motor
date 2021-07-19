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
  id: string = '';
  name: string = '';
  gender: string = '';
  phone: string = '';
  email: string = '';
  username: string = '';
  user_type: string = '';

  users: User[] = [];


  //Dependency-Injection
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onSubmit(){}

  onLoadPage() {
    this.userService.getUsersTypeCustomer().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    );
  }

  onClickDelete(id?: number, name?: string) {
    if(confirm("Are you sure to delete "+name)) {
      this.userService.deleteUser(id).subscribe();
      // this.route.navigate(['adminmanagecustomer']);
      window.location.reload();
    }
  }

  onClickSignOut() {
    this.userService.onLogout();
    this.route.navigate(['/main']);
  }
}
