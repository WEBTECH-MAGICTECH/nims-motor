import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { map, retry, catchError } from "rxjs/operators";
import { User } from '../models/user';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
    baseUrl: string = '/nhapi/booking';

    constructor(private http:HttpClient) { }

    getBooking(endpoint: string): Observable<Booking[]> {
        return this.http.get<Booking[]>(this.baseUrl + endpoint);
      }

    deleteBooking() {

      }

    updateBooking() {

    }

}
