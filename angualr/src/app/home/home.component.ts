import { Component, OnInit } from '@angular/core';
import { Phone } from '../common/isPhone';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed;
  isPhone;// 判断是否是手机端
  width = document.body.clientWidth - 300;
  widthapp = document.body.clientWidth;
  heightapp = document.body.clientHeight;



  constructor() { }

  ngOnInit() {

    this.isPhone = Phone.isPhone();

  }


  leftclose() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed == true) {
      this.width = document.body.clientWidth - 120;
    } else {
      this.width = document.body.clientWidth - 300;
    }
  }



}
