import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 /* isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  closeDropdown() {
    this.isDropdownOpen = false;
  }*/

  isDropdownOpen = false;
  isLoggedIn = false;
  userName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Initializing NavbarComponent...');
    // Check local storage for user information
    const userInfoString = localStorage.getItem('UserInfo');
    console.log('User Info from localStorage:', userInfoString); // Debug log
    const user = userInfoString ? JSON.parse(userInfoString) : {};
    console.log('Parsed User Info:', user); // Debug log
    if (user && user.userName) { // Change from user.name to user.userName
      this.isLoggedIn = true;
      this.userName = user.userName; // Change from user.name to user.userName
      console.log('User is logged in as:', this.userName); // Debug log
    } else {
      console.log('User is not logged in'); // Debug log
    }
  }
  
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  logout() {
    // Clear user information from local storage
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.isLoggedIn = false;
    this.userName = null;
    this.closeDropdown();
    console.log('User logged out'); // Debug log
  }



}