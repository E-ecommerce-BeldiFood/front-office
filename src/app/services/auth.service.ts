import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
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

  /*
sendResetPassword(email: string): Observable<string> {
    const url = `${this.apiUrl}/send-reset-password`;
    const params = { email };
    return this.http.post<string>(url, null, { params });
}
resetPassword(resetPasswordDTO: ResetPasswordDTO): Observable<string> {
  const url = `${this.apiUrl}/reset-password`;
  return this.http.post<string>(url, resetPasswordDTO);
}


sendResetPassword(email: string): Observable<string> {
  const url = `${this.apiUrl}/auth/send-reset-password`;
  const params = { email };
  return this.http.post<string>(url, null, { params });
}
*/

sendResetPassword(email: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/auth/send-reset-password`, null, {
    params: { email },
    responseType: 'text' // Set responseType to 'text' to handle plain text responses
  }).pipe(
    catchError(this.handleError)
  );
}

resetPassword(resetPasswordData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/auth/reset-password`, resetPasswordData, {
    responseType: 'text' // Set responseType to 'text' to handle plain text responses
  }).pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unexpected error occurred. Please try again later.';
  if (error.error instanceof ErrorEvent) {
    // Client-side or network error occurred.
    errorMessage = `Error: ${error.error.message}`;
  } else if (error.status === 200 && typeof error.error === 'string') {
    // Handle the case where the server returns a 200 status with an error in plain text
    errorMessage = error.error;
  } else {
    // Server-side error occurred.
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(() => new Error(errorMessage));
}





}
