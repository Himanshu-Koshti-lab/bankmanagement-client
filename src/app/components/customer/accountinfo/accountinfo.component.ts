import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css'],
})
export class AccountinfoComponent implements OnInit {
  AllAccount: any;

  constructor(private _service: MainService) {}

  ngOnInit(): void {
    this._service
      .getUserAccounts()
      .subscribe((data) => (this.AllAccount = data));
  }
}
