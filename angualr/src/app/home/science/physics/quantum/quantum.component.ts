import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { ShareDataService } from '../../../../service/share-data.service';
@Component({
  selector: 'app-quantum',
  templateUrl: './quantum.component.html',
  styleUrls: ['./quantum.component.css']
})
export class QuantumComponent implements OnInit {

  constructor(public test: ShareDataService) { }

  ngOnInit() {
    this.initEvent();
  }

  initEvent() {
    const test = document.getElementById('test');
    const source = fromEvent(test, 'click');

  }

  add() {
    this.test.pushData(2);
  }

  delete() {
    this.test.deleteData();
  }

  alertData() {
    this.test.consoleData();
  }

}
