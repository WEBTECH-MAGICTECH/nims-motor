import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
import { StorageHelperService } from 'src/app/services/storage-helper.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  room_name: string = '';
  checkin_date: any = Date.now();
  checkout_date: any = Date.now();
  payment_type: string = '';
  amount: number = 0;
  booking: Booking = new Booking();
  room: Room;
  user: User;

  constructor(
    private bookingService: BookingService,
    private storageHelperService: StorageHelperService,
    private route: Router
  ) {
    this.room = this.storageHelperService.getCurrentRoom()
    this.user = this.storageHelperService.getUser();
    this.amount = Number(this.room.room_price);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.checkin_date || !this.checkout_date || !this.payment_type) {
      alert('Please complete the booking details');
    }
    else {
      this.booking.user_id = this.user.id?.toString();
      this.booking.room_name = this.room.room_name;
      this.booking.checkin_date = this.checkin_date;
      this.booking.checkout_date = this.checkout_date;
      this.booking.payment_type = this.payment_type;
      this.booking.amount = Number(this.room.room_price);
      this.booking.booking_status = 'Pending';
      console.log(this.booking);

      this.bookingService.createBooking(this.booking).subscribe(
        booking => {
          console.log(booking);
          if(!booking) {
            alert('Booking Failed. Please try again')
          } else {
            alert('Your booking is success. Thank you!')
          }
        }
      );
      this.route.navigate(['booking-history']);
    }
    // console.log(this.room_name);
    // console.log(this.checkin_date);
    // console.log(this.checkout_date);
    // console.log(this.payment_type);
    // console.log(this.amount);
  }

}
