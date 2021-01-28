import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  Transactions;
  temp: any;

  constructor(
    private _service: MainService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._service.getTransactionCustomersStatement().subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
