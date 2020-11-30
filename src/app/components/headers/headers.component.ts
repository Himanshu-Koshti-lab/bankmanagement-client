import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CustomerCareComponent } from '../customer-care/customer-care.component';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AboutUsComponent, { width: '1400px' });
  }

  openCustomerCare(){
    this.dialog.open(CustomerCareComponent, { width: '1000px' });
  }
}
