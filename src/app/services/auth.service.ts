import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserLoginRequest } from '../models/user-login-request.model';
import { TokenDto } from '../models/token-dto.model';
import { UserRegisterRequest } from '../models/user-register-request.model';
import { UserRegisterResponse } from '../models/user-register-response.model';
import { ResetPasswordDTO } from '../models/reset-password-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginData: UserLoginRequest): Observable<TokenDto> {
    return this.http.post<TokenDto>(`${this.apiUrl}/auth/login`, loginData);
  }

  register(registerData: UserRegisterRequest): Observable<UserRegisterResponse> {
    return this.http.post<UserRegisterResponse>(`${this.apiUrl}/auth/register`, registerData);
  }

  sendResetPassword(email: string): Observable<string> {
    const url = `${this.apiUrl}/send-reset-password`;
    const params = { email };
    return this.http.post<string>(url, null, { params });
}


resetPassword(resetPasswordDTO: ResetPasswordDTO): Observable<string> {
  const url = `${this.apiUrl}/reset-password`;
  return this.http.post<string>(url, resetPasswordDTO);
}

}
