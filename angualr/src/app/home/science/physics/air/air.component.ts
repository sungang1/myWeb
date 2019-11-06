import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../service/share-data.service';
import { Subject, fromEvent, Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
  htmlDom = ''; // 存储html
  format = 'yyyy/MM/dd';

 
  subject = new Subject<any>();


  constructor(public test: ShareDataService, private http: HttpClient) { }

  ngOnInit() {
    /**
     *  订阅有关
     */
    // const subject: Subject<string> = new Subject<string>();
    // const subscriptionA: Subscription = subject.subscribe(
    //   (val: string) => {
    //     console.log(`observerA: ${val}`);
    //   }
    // );
    // const subscriptionB: Subscription = subject.subscribe(
    //   (val: string) => {
    //     console.log(`observerB: ${val}`);
    //   }
    // );
    // subject.next('Mikey');
    // subject.next('Leo');
    // subscriptionA.unsubscribe(); // 取消订阅
    // subscriptionB.unsubscribe(); // 取消订阅
    // subject.next('Raph');
    // subject.complete();

    /**
     *  订阅有关
     */

    // const test = document.getElementById('test');
    // let obj = fromEvent(test,'click');

    // this.subject.subscribe(() => {
    //   console.log("one");
    // });
    // this.subject.subscribe(() => {
    //   console.log("two");
    // });

    /**
     *   可观察对象
     */
    // 创建了可观察对象
    let obserable = function (observer) {
      observer.next(1);
      observer.next(2);
      observer.complete();
    }
    // 创建可观察者
    let person = {
      next: function (value) {
        console.log('**************');
        console.log(value);
        console.log('**************');
      },
      complete: function () {
        console.log('完成');
      }
    }

    let some = Observable.create(obserable);  // 创建可观察对象
    let subscription = some.subscribe(person); // 观察者订阅可观察对象
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

  getText() {
    this.http.get('/my/output').subscribe((data: any) => {
      this.htmlDom = data.data;
      console.log(this.htmlDom);
      this.addHtml();
    })
  }



  addHtml() {
    let test = document.getElementById('test');
    test.innerHTML = this.htmlDom;
  }


  picker(some) {
    console.log(some);
  }

}
