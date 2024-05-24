import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {
  id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };
  isEditing: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      this.userData = JSON.parse(userInfoString);
      console.log(this.userData);
    }
  }

  
  editProfile() {
    this.isEditing = true;
  }

 /* saveChanges() {
    const accessToken = localStorage.getItem('accessToken'); // Assuming access token is stored as 'accessToken'
    if (!accessToken) {
      // Handle missing access token
      this.toastr.error('Authentication token missing. Please log in again.', 'Error');
      //this.router.navigate(['/Login']); // Redirect to login page
      return;
    }
  
    // Include access token in request headers
    const headers = { 'Authorization': `Bearer ${accessToken}` };
  
    this.userService.updateUser(this.userData).subscribe(
      response => {
        if (response) {
          //localStorage.setItem('UserInfo', JSON.stringify(this.userData));
          this.toastr.success('Profile updated successfully!', 'Success');
          this.isEditing = false;
        } else {
          this.toastr.error('Failed to update profile.', 'Error');
        }
      },
      error => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error
          this.toastr.error('Unauthorized. Please log in again.', 'Error');
         // this.router.navigate(['#']); // Redirect to login page
        } else {
          // Handle other errors
          this.toastr.error('An error occurred while updating the profile.', 'Error');
        }
      }
    );
  }*/

  saveChanges() {
    this.userService.updateUser(this.userData).subscribe(
      response => {
        if (response) {
          localStorage.setItem('UserInfo', JSON.stringify(this.userData));
          this.toastr.success('Profile updated successfully!', 'Success');
          this.isEditing = false;
          this.router.navigate(['/']);
        } else {
          this.toastr.error('Failed to update profile.', 'Error');
        }
      },
      error => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error
          this.toastr.error('Unauthorized. Please log in again.', 'Error');
         // this.router.navigate(['/Login']); // Redirect to login page
        } else {
          // Handle other errors
          this.toastr.error('An error occurred while updating the profile.', 'Error');
        }
      }
    );
  }
  
  
}