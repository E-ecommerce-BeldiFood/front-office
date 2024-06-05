import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordDTO } from 'src/app/models/reset-password-dto.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordData = { newPassword: '', token: '', email: '' };
  confirmPassword!: string;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    if (this.resetPasswordData.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.resetPassword(this.resetPasswordData).subscribe({
      next: response => {
        this.successMessage = response; // Assuming response is the success message
        this.errorMessage = null;
        this.router.navigate(['/Login']);
      },
      error: err => {
        this.errorMessage = err.message; // Error message from the error handler
        this.successMessage = null;
      }
    });
  }
}