import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

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
  // booking_status: string = '';

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.room_name || !this.checkin_date || !this.checkout_date || !this.payment_type || !this.amount) {
      alert('Please complete the booking details');
    }
    else {
      this.booking.user_id = '101';
      this.booking.room_name = this.room_name;
      this.booking.checkin_date = this.checkin_date;
      this.booking.checkout_date = this.checkout_date;
      this.booking.payment_type = this.payment_type;
      this.booking.amount = this.amount;
      this.booking.booking_status = 'Pending';
      console.log(this.booking);

      this.bookingService.createBooking(this.booking).subscribe(
        booking => {
          console.log(booking);
        }
      );
    }
    console.log(this.room_name);
    console.log(this.checkin_date);
    console.log(this.checkout_date);
    console.log(this.payment_type);
    console.log(this.amount);

    // if(!this.password || !this.username) {
    //   alert('Please insert username or password');
    // }
    // this.userService.userLogin(this.username, this.password)
    //   .subscribe((user) => {
    //     this.user = user;
    //     // console.log(this.user == null ? 'user after login' + this.user : 'not null');
    //     if(this.user != false) {
    //       console.log(this.user.user_type);
    //       if(this.user.user_type == 'Customer')
    //         this.route.navigate(['main']);
    //       else this.route.navigate(['adminmain']);
    //     } else {
    //       alert('Incorrect username or password')
    //     }
        // console.log(this.user);
      // });
  }

}
