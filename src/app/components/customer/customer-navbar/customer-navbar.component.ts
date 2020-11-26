import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css'],
})
export class CustomerNavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onLogout() {
    if (sessionStorage.getItem('token') !== null) {
      sessionStorage.removeItem('token');
      this.router.navigateByUrl('home');
      console.log('SuccessFull Logout');
    }
  }
}
