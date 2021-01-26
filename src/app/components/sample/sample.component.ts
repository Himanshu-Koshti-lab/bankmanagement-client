import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/services/main.service';
import { TransactionRecord } from 'src/app/classes/transactionrecord';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
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
  constructor(private router: Router, private _service: MainService) {}
  public isUserLoggedIn;
  Transactions;

  ngOnInit(): void {
    if (sessionStorage.getItem('Log')) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    this.getData();
    this.dataSource.paginator = this.paginator;
  }
  onLogout() {
    if (sessionStorage.getItem('Log') !== null) {
      sessionStorage.removeItem('Log');
      this.router.navigateByUrl('home');
      console.log('SuccessFull Logout');
    }
  }
}
