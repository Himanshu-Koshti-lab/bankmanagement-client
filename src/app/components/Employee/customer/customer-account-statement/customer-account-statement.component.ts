import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-account-statement',
  templateUrl: './customer-account-statement.component.html',
  styleUrls: ['./customer-account-statement.component.css']
})
export class CustomerAccountStatementComponent implements OnInit {

  Transactions;
  temp: any;

  constructor(private _service: MainService) { }

  ngOnInit(): void {
    this._service.getTransactionCustomersStatement().subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;
  }

}
