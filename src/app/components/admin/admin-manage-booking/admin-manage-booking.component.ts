import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { windowTime } from 'rxjs/operators';


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
  booking_status?: string;

  bookings: Booking[] = [];

  //Dependency-Injection
  constructor(
    private bookingService: BookingService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onSubmit(){

  }

  onLoadPage() {
    this.bookingService.getBookingList().subscribe(
      bookings => {
        console.log(bookings)
        this.bookings = bookings;
      }
    );
  }

  onChangeStatus(event: any, booking_id?: number) {
    // console.log(event.target.value);
    this.booking_status = event.target.value;
    console.log(this.booking_status);

    this.bookingService.updateBooking({booking_status: this.booking_status}, booking_id).subscribe();
    window.location.reload();

  }

}
