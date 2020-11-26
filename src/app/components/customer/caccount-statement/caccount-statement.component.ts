import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-caccount-statement',
  templateUrl: './caccount-statement.component.html',
  styleUrls: ['./caccount-statement.component.css'],
})
export class CaccountStatementComponent implements OnInit {
  Transactions;
  temp: any;

  constructor(
    private _service: MainService
  ) {}

  ngOnInit(): void {
    this._service
      .getTransactionStatement()
      .subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;
  }
}
