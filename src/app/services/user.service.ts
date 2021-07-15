import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://localhost/nhapi';

  constructor(private http:HttpClient) { }

  getUsers(endpoint: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + endpoint);
  }

  userLogin(endpoint: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + endpoint);
  }
}
