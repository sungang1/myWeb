import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from '../../env';
@Component({
  selector: 'app-sydwcx',
  templateUrl: './sydwcx.component.html',
  styleUrls: ['./sydwcx.component.css']
})
export class SydwcxComponent implements OnInit {
  dataNull = false; // 数据为空
  listOfData = [];//数据
  isLoading = true;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.goSearchdata();
  }
  goSearchdata() {
    this.dataNull = false;
    let url = env.Api(12994);
    this.http.post(url, {}).subscribe((data: any) => {
      this.isLoading = false;
      if (data.error !== '') {
        alert(data.error);
      } else {
        this.listOfData = data.data;
        if (this.listOfData.length < 1) {
          this.dataNull = true;
        }
      }
    })

  }


  goto() {
    history.go(-1);
  }



}
