import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterRequest } from 'src/app/models/user-register-request.model';
import { UserRegisterResponse } from 'src/app/models/user-register-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: UserRegisterRequest = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    address:''
  };
  errorMessage: string | null = null;
  successMessage: string | null = null;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  
  register() {
    this.http.post<UserRegisterResponse>(`${this.apiUrl}/auth/register`, this.registerData)
      .subscribe({
        next: (response) => {
          this.successMessage = 'Registration successful.Please check your mail to conferme you account Redirecting to login...';
          this.errorMessage= null;
          setTimeout(() => {
            this.router.navigate(['/Login']);
          }, 5000); // Delay to show the success message before redirecting
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          this.successMessage = null;
        }
      });
  }
}
