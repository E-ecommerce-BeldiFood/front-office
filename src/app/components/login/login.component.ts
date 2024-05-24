import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenDto } from 'src/app/models/token-dto.model';
import { UserLoginRequest } from 'src/app/models/user-login-request.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginData: UserLoginRequest = {
    login: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('Login component initialized');
  }
  
  login() {
    this.authService.login(this.loginData).subscribe(
      (response: TokenDto) => { // Capture the response data
        // Store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('UserInfo', JSON.stringify(response.user));
        // Simulate a login process
        localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(response.refreshToken));
        
        // Navigate to the home page or redirect to the desired route
        this.router.navigate(['/']); // Navigate to home or dashboard
      },
      error => {
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    );
  }
}
