import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onClickSignOut() {
    this.userService.onLogout();
    this.route.navigate(['/main']);
  }

}
