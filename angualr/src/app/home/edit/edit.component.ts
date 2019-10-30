import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  getAClass = [];
  getBClass = [];
  getCClass = [];
  getTitle = [];
  selectA = '';
  selectB = '';
  selectC = '';



  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.post('/class/getclass', { type: 'A' }).subscribe((data: any) => {
      this.getAClass = data.data;
    });

  }
  selectAClass(some: any) {
    this.getBClass = [];
    this.getCClass = [];
    this.getTitle = [];
    if (some.target.nodeName == 'SPAN') {
      this.selectA = some.target.parentElement.children[0].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectA = some.target.children[0].innerHTML;
    }
    this.http.post('/class/getclass', { type: 'B', refA: this.selectA }).subscribe((data: any) => {
      if (data.error != '') {
        alert(data.error);
      } else {
        this.getBClass = data.data;
      }
    });
  }

  selectBClass(some: any) {
    this.getCClass = [];
    this.getTitle = [];
    if (some.target.nodeName == 'SPAN') {
      this.selectB = some.target.parentElement.children[0].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectB = some.target.children[0].innerHTML;
    }
    this.http.post('/class/getclass', { type: 'C', refA: this.selectA, refB: this.selectB }).subscribe((data: any) => {
      if (data.error != '') {
        alert(data.error);
      } else {
        this.getCClass = data.data;
      }
    });
  }


  selectCClass(some: any) {
    this.getTitle = [];
    if (some.target.nodeName == 'SPAN') {
      this.selectC = some.target.parentElement.children[0].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectC = some.target.children[0].innerHTML;
    }
    this.http.post('/class/getclass', { type: 'D', refA: this.selectA, refB: this.selectB, refC: this.selectC }).subscribe((data: any) => {
      if (data.error != '') {
        alert('后端错误');
      } else {
        this.getTitle = data.data;
      }
    });
  }





}
