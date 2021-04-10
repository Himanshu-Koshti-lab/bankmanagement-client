import { Component, OnInit ,ViewChild} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {AccountStatement} from 'src/app/classes/account-statement';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-account-statement',
  templateUrl: './customer-account-statement.component.html',
  styleUrls: ['./customer-account-statement.component.css']
})
export class CustomerAccountStatementComponent implements OnInit {

  Transactions;
  temp: any;
  ELEMENT_DATA: AccountStatement[];

  displayedColumns: string[] = [
    'transactionId',
    'senderAccountNumber',
    'receiverAccountNumber',
    'amount',
    'transactionStatus',
    'transactionType',
  ];

  dataSource = new MatTableDataSource<AccountStatement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _service: MainService, private spinner: NgxSpinnerService) { }

  public getData() {
    this._service
      .getTransactionCustomersStatement()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as AccountStatement[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._service.getTransactionCustomersStatement().subscribe((data) => (this.Transactions = data));
    this.temp = this.Transactions;
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
