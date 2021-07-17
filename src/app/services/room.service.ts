import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl: string = '/nhapi/room';

  constructor(private http:HttpClient) { }

  getRoom(): Observable<Room[]> {
      return this.http.get<Room[]>(this.baseUrl);
  }

  getRoomById(room_id: number): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl+'/'+room_id);
  }

}
