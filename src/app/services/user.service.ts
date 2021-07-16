import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { map, retry, catchError } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = '/nhapi/user';

  constructor(private http:HttpClient) { }

  getUsers(endpoint: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + endpoint);
  }

  userLogin(username: string, password: string): Observable<User> {

    return this.http.get<User>(this.baseUrl + '/' + username + '/' + password)
      .pipe(
        map((user) => {
          // console.log(user);

          return user;
        }),
        retry(3),
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<User>{
    console.log(user);

    return this.http.post<User>(this.baseUrl + '/newuser', user)
      .pipe(
        map(user => {
          console.log(user);

          return user;
        }),
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse){
    console.log('Retry 3 times. Failed');
    return throwError(error);
  }
}
