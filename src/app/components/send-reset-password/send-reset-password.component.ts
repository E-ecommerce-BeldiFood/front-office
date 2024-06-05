import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-reset-password',
  templateUrl: './send-reset-password.component.html',
  styleUrls: ['./send-reset-password.component.css']
})
export class SendResetPasswordComponent {
  email!: string;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  sendResetPassword() {
    this.authService.sendResetPassword(this.email).subscribe({
      next: response => {
        this.successMessage = response; // Assuming response is the success message
        this.errorMessage = null;
        this.router.navigate(['/ResetPassword']);
      },
      error: err => {
        this.errorMessage = err.message; // Error message from the error handler
        this.successMessage = null;
      }
    });
  }
    
}
