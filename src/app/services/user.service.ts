import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { map, retry, catchError } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://magictech.ga/class/nhapi/user';

  constructor(private http:HttpClient) { }

  getUsersTypeCustomer(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'/customer');
  }

  userLogin(username: string, password: string): Observable<User> {

    return this.http.get<User>(this.baseUrl + '/' + username + '/' + password)
      .pipe(
        map((user) => {
          // console.log('user service' + user);
          localStorage.removeItem('auth_user');
          localStorage.setItem('auth_user', JSON.stringify(user));
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
        catchError(this.deleteError)
      );
  }

  updateUser(userid?: string, user?: User): Observable<User> {
    console.log(userid);
    console.log(user);
    console.log(this.baseUrl+'/'+userid);

    return this.http.put<User>(this.baseUrl+'/'+userid, user)
      .pipe(
        map(user => {
          console.log(user);
          localStorage.removeItem('auth_user');
          localStorage.setItem('auth_user', JSON.stringify(user));
          return user;
          // return user
        }),
        retry(3),
        catchError(this.handleError)
      );
  }

  deleteUser(id?: number) {
    return this.http.delete(this.baseUrl+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }

  onLogout() {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('bookings');
    localStorage.removeItem('currentRoom');
  }

  private handleError(error: HttpErrorResponse){
    console.log('Retry 3 times. Failed');
    return throwError(error);
  }

  private deleteError(error: HttpErrorResponse) {
    console.log('Delete Failed');
    return throwError(error);
  }
}
