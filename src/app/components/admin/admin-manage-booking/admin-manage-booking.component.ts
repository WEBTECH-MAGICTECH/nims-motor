import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowTime } from 'rxjs/operators';
import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';
import { Booking } from 'src/app/models/booking';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-manage-booking',
  templateUrl: './admin-manage-booking.component.html',
  styleUrls: ['./admin-manage-booking.component.css']
})
export class AdminManageBookingComponent implements OnInit {

  booking_status?: string;

  bookings: Booking[] = [];

  //Dependency-Injection
  constructor(
    private bookingService: BookingService,
    private route: Router,
    private userService: UserService
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

  onClickSignOut() {
    this.userService.onLogout();
    this.route.navigate(['/main']);
  }

}
