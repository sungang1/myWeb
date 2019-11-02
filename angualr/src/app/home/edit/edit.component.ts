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
  selectTitle = '';
  obj = {
    AName: '',
    AId: '',
    BName: '',
    BId: '',
    CName: '',
    CId: '',
    TName: '',
    TId: '',
    type: 'M',
    disA: false,
    disB: false,
    disC: false,
    disT: false
  }

  radioValue = 'A';// 默认添加A类
  methodType = 'M'; // 类型
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.post('/class/getclass', { type: 'A' }).subscribe((data: any) => {
      this.getAClass = data.data;
      console.log(data);
    });

    this.obj.disA = false;
    this.obj.disB = true;
    this.obj.disC = true;
    this.obj.disT = true;

  }
  selectAClass(some: any) {
    this.getBClass = [];
    this.getCClass = [];
    this.getTitle = [];
    this.obj.AName = '';
    this.obj.AId = '';
    this.obj.BId = '';
    this.obj.BName = '';
    this.obj.CId = '';
    this.obj.CName = '';
    this.obj.TId = '';
    this.obj.TName = '';
    if (some.target.nodeName == 'SPAN') {
      this.selectA = some.target.parentElement.children[0].innerHTML;
      this.obj.AName = some.target.parentElement.children[1].innerHTML;
      this.obj.AId = some.target.parentElement.children[0].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectA = some.target.children[0].innerHTML;
      this.obj.AName = some.target.children[1].innerHTML;
      this.obj.AId = some.target.children[0].innerHTML;
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
    this.obj.BId = '';
    this.obj.BName = '';
    this.obj.CId = '';
    this.obj.CName = '';
    this.obj.TId = '';
    this.obj.TName = '';
    if (some.target.nodeName == 'SPAN') {
      this.selectB = some.target.parentElement.children[0].innerHTML;
      this.obj.BId = some.target.parentElement.children[0].innerHTML;
      this.obj.BName = some.target.parentElement.children[1].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectB = some.target.children[0].innerHTML;
      this.obj.BId = some.target.children[0].innerHTML;
      this.obj.BName = some.target.children[1].innerHTML;
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
    this.obj.CId = '';
    this.obj.CName = '';
    this.obj.TId = '';
    this.obj.TName = '';
    if (some.target.nodeName == 'SPAN') {
      this.selectC = some.target.parentElement.children[0].innerHTML;
      this.obj.CId = some.target.parentElement.children[0].innerHTML;
      this.obj.CName = some.target.parentElement.children[1].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectC = some.target.children[0].innerHTML;
      this.obj.CId = some.target.children[0].innerHTML;
      this.obj.CName = some.target.children[1].innerHTML;
    }
    this.http.post('/class/getclass', { type: 'D', refA: this.selectA, refB: this.selectB, refC: this.selectC }).subscribe((data: any) => {
      if (data.error != '') {
        alert('后端错误');
      } else {
        this.getTitle = data.data;
      }
    });
  }

  selectT(some: any) {
    this.obj.TId = '';
    this.obj.TName = '';
    if (some.target.nodeName == 'SPAN') {
      this.selectTitle=some.target.parentElement.children[0].innerHTML;
      this.obj.TId = some.target.parentElement.children[0].innerHTML;
      this.obj.TName = some.target.parentElement.children[1].innerHTML;
    } else if (some.target.nodeName == 'DIV') {
      this.selectTitle=some.target.children[0].innerHTML;
      this.obj.TId = some.target.children[0].innerHTML;
      this.obj.TName = some.target.children[1].innerHTML;
    }
  }


  submit() {
    let sendObj: any  ;
    let url = '';
    switch (this.radioValue) {
      case 'A':
        if (this.obj.AName == '' || this.obj.AId == '') {
          alert('请输入A类名称或者Id');
          return;
        } else {
          this.obj.BId = '';
          this.obj.BName = '';
          this.obj.CName = '';
          this.obj.CId = '';
          this.obj.TId = '';
          this.obj.TName = '';
          sendObj = {
            AId: this.obj.AId,
            AName: this.obj.AName,
            type: 'A'
          }
        }
        break;
      case 'B':
        if (this.obj.AName == '' || this.obj.AId == '' || this.obj.BName == '' || this.obj.BId == '') {
          alert('请输入完整的A类标识和B类标识');
          return;
        } else {
          this.obj.CName = '';
          this.obj.CId = '';
          this.obj.TId = '';
          this.obj.TName = '';
          sendObj = {
            AId: this.obj.AId,
            AName: this.obj.AName,
            BId: this.obj.BId,
            BName: this.obj.BName,
            type: 'B'
          }
        }
        break;
      case 'C':
        if (this.obj.AName == '' || this.obj.AId == '' || this.obj.BName == '' ||
          this.obj.BId == '' || this.obj.CId == '' || this.obj.CName == '') {
          alert('请输入完整的A、B、C类标识');
          return;
        } else {
          this.obj.TId = '';
          this.obj.TName = '';
          sendObj = {
            AId: this.obj.AId,
            AName: this.obj.AName,
            BId: this.obj.BId,
            BName: this.obj.BName,
            CId: this.obj.CId,
            CName: this.obj.CName,
            type: 'C'
          }
        }
        break;
      case 'D':
        if (this.obj.AName == '' || this.obj.AId == '' || this.obj.BName == '' ||
          this.obj.BId == '' || this.obj.CId == '' || this.obj.CName == '') {
          alert('请输入完整的A、B、C类标识和标题完整');
          return;
        } else {
          sendObj = {
            AId: this.obj.AId,
            AName: this.obj.AName,
            BId: this.obj.BId,
            BName: this.obj.BName,
            CId: this.obj.CId,
            CName: this.obj.CName,
            TId: this.obj.TId,
            TName: this.obj.TName,
            type: 'D'
          }
        }
        break;
      default:
        break;
    }

    switch (this.obj.type) {
      case 'M':
        url = '/class/add';
        break;
      case 'N':
        url = '/class/modify';
        if(sendObj.type=='A'){
          sendObj.nochangeA= this.selectA;
        }
        if(sendObj.type=='B'){
          sendObj.nochangeB= this.selectB;
        }
        if(sendObj.type=='C'){
          sendObj.nochangeC= this.selectC;
        }
        if(sendObj.type=='C'){
          sendObj.nochangeT= this.selectTitle;
        }
        break;
      case 'G':
        url = '/class/delete';
        break;
      default:
        break;
    }

    this.http.post(url, sendObj).subscribe((data: any) => {
      if (data.error !== '') {
        alert('错误信息：' + data.error.error);
      } else {
        alert('操作成功');
        this.test();
      }
    })
  }

  test() {
    switch (this.radioValue) {
      case 'A':
        this.http.post('/class/getclass', { type: 'A' }).subscribe((data: any) => {
          this.getAClass = data.data;
        });
        break;
      case 'B':
        this.http.post('/class/getclass', { type: 'B', refA: this.selectA }).subscribe((data: any) => {
          if (data.error != '') {
            alert(data.error);
          } else {
            this.getBClass = data.data;
          }
        });
        break;
      case 'C':
        this.http.post('/class/getclass', { type: 'D', refA: this.selectA, refB: this.selectB, refC: this.selectC }).subscribe((data: any) => {
          if (data.error != '') {
            alert('后端错误');
          } else {
            this.getTitle = data.data;
          }
        });
        break;
      case 'D':
        break;
      default:
        break;
    }
  }


  changeInput(some: any) {
    console.log(some);
    // console.log(this.radioValue);
    if (some == 'A') {
      this.obj.BId = '';
      this.obj.BName = '';
      this.obj.CId = '';
      this.obj.CName = '';
      this.obj.TId = '';
      this.obj.TName = '';
      this.obj.disA = false;
      this.obj.disB = true;
      this.obj.disC = true;
      this.obj.disT = true;
    }
    if (some == 'B') {
      this.obj.CId = '';
      this.obj.CName = '';
      this.obj.TId = '';
      this.obj.TName = '';
      this.obj.disA = true;
      this.obj.disB = false;
      this.obj.disC = true;
      this.obj.disT = true;
    }
    if (some == 'C') {
      this.obj.TId = '';
      this.obj.TName = '';
      this.obj.disB = true;
      this.obj.disC = false;
      this.obj.disA = true;
      this.obj.disT = true;
    }
    if (some == 'D') {
      this.obj.disB = true;
      this.obj.disC = true;
      this.obj.disA = true;
      this.obj.disT = false;
    }



  }





}
