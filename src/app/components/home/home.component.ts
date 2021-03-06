import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor() { 
  }

  ngOnInit(): void {
  }
  //images = ['https://panipuri.us/wp-content/uploads/2018/10/chinmayi-takes-big-names-drags-salman-khan.jpg', 'https://lh3.googleusercontent.com/proxy/jk-_HpIyA6zxMIwOq0V4M5tIKEIzSBGK9oR9RQmIm5_yBViNsoA2FP99DPEbVBnZK3aMread8f0RVz5de0C2-LmrjPxxEEk6U5pxHkf3OawB4GTmKQnQ9aEpW-pQRrepAkdS7Eo', 'https://filmymantra.com/wp-content/uploads/2018/06/Salman-Khan-HD-wallpaper-3.jpg'];


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
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
