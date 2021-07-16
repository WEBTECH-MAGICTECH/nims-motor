import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {
  user?: User;

  constructor() { }

  getUser() {
    // if(localStorage.getItem('auth_user')) return new User();
    // else this.user = JSON.parse(localStorage.getItem('auth_user') || '');

    const userJson = localStorage.getItem('auth_user');
    // this.user = userJson !== null ? JSON.parse(userJson) : null;

    // return this.user;
    return userJson !== null ? JSON.parse(userJson) : null;
  }
}
