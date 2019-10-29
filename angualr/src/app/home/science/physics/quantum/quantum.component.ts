import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { ShareDataService } from '../../../../service/share-data.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quantum',
  templateUrl: './quantum.component.html',
  styleUrls: ['./quantum.component.css']
})
export class QuantumComponent implements OnInit {
  content: string = '<h1>这是我的测试文件</h1>'; // 富文本内容
  image_upload_url = 'www.baidu.com';
  editor: any;

  constructor(public test: ShareDataService, private http: HttpClient) { }

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


  richText() {
    let obj = {
      content: this.content
    }
    this.http.post('/my/save', obj).subscribe(data=>{
      console.log('上传成功');
    })

  }
    
 


  /**
  * 富文本编辑器quill-editor内容变化时change事件
  */
  contentChanged(event) {
    this.content = event.html;  // 内容编辑
  }


  some(some) {
    console.log('创建实例');
    console.log(some);
    some.history.innerHTML = '<p>这是我的默认实例</p>'
  }



}
