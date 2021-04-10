import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class CHomeComponent implements OnInit {

  constructor(private router: Router,private _service: MainService) { }

  Customer:any;

  ngOnInit(): void {
    if(sessionStorage.getItem("token") === null){
      this.router.navigateByUrl('login')
      console.log("Login First")
    }
    const jwt = JSON.stringify(sessionStorage.getItem("token"));
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      if(decodedJwtData.authorities == "ROLE_ADMIN")
        this.router.navigateByUrl('Admin')
        else if (decodedJwtData.authorities == "ROLE_EMPLOYEE")
          this.router.navigateByUrl('employeeDashboard')
        else 
          this.router.navigateByUrl('CustomerHome')

          this._service.getCustomer().subscribe((data) => this.Customer = data);
          
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    autoWidth:true,
    autoHeight:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      840: {
        items: 1
      }
    },
    nav: true
  }

}
