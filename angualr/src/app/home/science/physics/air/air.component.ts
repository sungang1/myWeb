import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../service/share-data.service';
import { Subject, fromEvent,Subscription } from 'rxjs';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {

  subject = new Subject<any>();


  constructor(public test: ShareDataService) { }

  ngOnInit() {

    const subject: Subject<string> = new Subject<string>();
    const subscriptionA: Subscription = subject.subscribe(
      (val: string) => {
        console.log(`observerA: ${val}`);
      }
    );
    const subscriptionB: Subscription = subject.subscribe(
      (val: string) => {
        console.log(`observerB: ${val}`);
      }
    );
    subject.next('Mikey');
    subject.next('Leo');
    subscriptionA.unsubscribe(); // 取消订阅
    subscriptionB.unsubscribe(); // 取消订阅
    subject.next('Raph');
    subject.complete();

    // const test = document.getElementById('test');
    // let obj = fromEvent(test,'click');
  
    // this.subject.subscribe(() => {
    //   console.log("one");
    // });
    // this.subject.subscribe(() => {
    //   console.log("two");
    // });
  }


  add() {
    this.test.pushData(8);
  }

  delete() {
    this.test.deleteData();
  }

  alertData() {
    this.test.consoleData();
  }




}
