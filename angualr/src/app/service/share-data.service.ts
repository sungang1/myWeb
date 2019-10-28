import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  test = [];
  constructor() {

  }

  pushData(obj:Number) {
    this.test.push(obj);
  }

  deleteData() {
    this.test.pop();
  }

  consoleData(){
    console.log(this.test);
  }


}
