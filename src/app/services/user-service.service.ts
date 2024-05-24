import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user-dto.model';

import { UserResponseDto } from '../models/userResponseDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = environment.apiUrl; // actual backend API URL

  constructor(private http: HttpClient) { }

 
  updateUser(userData: UserDto): Observable<UserDto> {
    return this.http.put<UserDto>(`${this.apiUrl}/users/user`, userData);
  }
  
}




