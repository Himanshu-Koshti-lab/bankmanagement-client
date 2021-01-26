import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/services/main.service';
import { TransactionRecord } from 'src/app/classes/transactionrecord';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-caccount-statement',
  templateUrl: './caccount-statement.component.html',
  styleUrls: ['./caccount-statement.component.css'],
})
export class CaccountStatementComponent implements OnInit {
  Transactions;
  temp: any;
  ELEMENT_DATA: TransactionRecord[];
  displayedColumns: string[] = [
    'transactionId',
    'senderAccountNumber',
    'receiverAccountNumber',
    'amount',
    'transactionStatus',
    'balance',
    'transactionType',
  ];
  dataSource = new MatTableDataSource<TransactionRecord>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public getData() {
    this._service
      .getTransactionStatement()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as TransactionRecord[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private _service: MainService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this._service
      .getTransactionStatement()
      .subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;

    this.getData();
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
