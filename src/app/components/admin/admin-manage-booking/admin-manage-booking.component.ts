import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-manage-booking',
  templateUrl: './admin-manage-booking.component.html',
  styleUrls: ['./admin-manage-booking.component.css']
})
export class AdminManageBookingComponent implements OnInit {
  booking_id: string = '';
  booking_date: string = '';
  start_date: string = '';
  end_date: string = '';
  booking_status: string = '';

  constructor(
    private BookingService: BookingService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
