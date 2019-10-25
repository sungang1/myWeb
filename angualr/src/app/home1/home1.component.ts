import { Component, OnInit,ViewEncapsulation } from '@angular/core';
declare var plus;
declare var mui;
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close() {
    if (mui.os.plus) {
      var ws = plus.webview.currentWebview();
      ws.hide("slide-out-left");
    }
  }


}
