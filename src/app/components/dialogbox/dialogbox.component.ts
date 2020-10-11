import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  user=new User();

  constructor(private _service:MainService,private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigate(['/login']);
  }

}
