import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  Transactions;
  temp: any;

  constructor(
    private _service: MainService
  ) {}

  ngOnInit(): void {
    this._service
      .getTransactionCustomersStatement()
      .subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;
  }

}
