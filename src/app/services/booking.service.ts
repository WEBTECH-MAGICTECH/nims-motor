import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { map, retry, catchError } from "rxjs/operators";
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
    baseUrl: string = '/nhapi/booking';

    constructor(private http:HttpClient) { }

    getBookingList(): Observable<Booking[]> {
        return this.http.get<Booking[]>(this.baseUrl)
        .pipe(
          map((bookings) => {
            // console.log('user service' + user);
            localStorage.removeItem('bookings');
            localStorage.setItem('bookings', JSON.stringify(bookings));
            return bookings;
          }),
          retry(3),
          catchError(this.handleError)
        );
      }

    getUserBookingList(userid?: string): Observable<Booking[]> {
      return this.http.get<Booking[]>(this.baseUrl+'/'+'user'+'/'+userid)
        .pipe(
          map(bookings => {
            localStorage.removeItem('bookings');
            localStorage.setItem('bookings', JSON.stringify(bookings));
            return bookings;
          }),
          retry(3),
          catchError(this.handleError)
        );
    }

    createBooking(booking: Booking): Observable<Booking>{
      console.log(booking);

      return this.http.post<Booking>(this.baseUrl + '/newbooking', booking)
        .pipe(
          map(booking => {
            console.log(booking);

            return booking;
          }),
          retry(3),
          catchError(this.handleError)
        );
    }

    updateBooking(booking_status: any, booking_id?: number): Observable<Booking>{
      return this.http.put(this.baseUrl + '/status/' + booking_id, booking_status);
    }

    private handleError(error: HttpErrorResponse){
      console.log('Retry 3 times. Failed');
      return throwError(error);
    }

}
