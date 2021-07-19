import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { Router } from '@angular/router';
import { windowTime } from 'rxjs/operators';
import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';
import { Booking } from 'src/app/models/booking';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  booking_status?: string;

  bookings: Booking[] = [];
  user: User;

  //Dependency-Injection
  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private storageHelperService: StorageHelperService,
    private route: Router
  ) {
    this.user = this.storageHelperService.getUser();
  }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onLoadPage() {
    this.bookingService.getUserBookingList(this.user.id?.toString()).subscribe(
      bookings => {
        console.log(bookings)
        this.bookings = bookings;
      }
    );
  }

  onChangeStatus(event: any, booking_id?: number) {
    this.booking_status = event.target.value;
    console.log(this.booking_status);

    this.bookingService.updateBooking({booking_status: this.booking_status}, booking_id).subscribe();
    window.location.reload();
  }

  onClickCancel(booking_id?: number) {
    this.bookingService.updateBooking({booking_status: 'Cancelled'}, booking_id).subscribe();
    window.location.reload();
  }

}
