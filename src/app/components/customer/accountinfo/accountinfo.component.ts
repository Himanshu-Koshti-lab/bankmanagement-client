import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css'],
})
export class AccountinfoComponent implements OnInit {
  AllAccount: any;

  constructor(
    private _service: MainService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._service
      .getUserAccounts()
      .subscribe((data) => (this.AllAccount = data));
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
