import { Component, OnInit } from '@angular/core';
 
 
import { HttpClient } from '@angular/common/http';
 
import { env } from '../../env';
@Component({
  selector: 'app-dwbap',
  templateUrl: './dwbap.component.html',
  styleUrls: ['./dwbap.component.css']
})
export class DwbapComponent implements OnInit {

   
  MessageInfo; // 接收后端数据 一级查询
  MessageInfoB; // 接收后端数据 二级查询
  showTable = false; // 是否展示表格 一级查询
  showTableB = false;   // 是否展示表格 二级查询
  isLoading = true; // 是否在加载中
  constructor(private http: HttpClient ) { }
  ngOnInit() {
  }

  yiji() {
   
    let url = env.Api(12998);
    this.isLoading = true;
    this.showTable = true;
    this.showTableB = false;
    this.http.get(url).subscribe((data: any) => {
      if (data.error !== "") {
        alert(data.error);
      } else {
        console.log(data);
        this.isLoading = false;
        let len = data.data.length;
        for (let i = 0; i < len; i++) {
          data.data[i].Memo = this.makeMemo(data.data[i].Memo);
        }
        this.MessageInfo = data.data;
        if(this.MessageInfo.length<1){
          alert('暂无有关数据');
        }
      }
    })
  }

  erji() {
   
    let url = env.Api(13000);
    this.isLoading = true;
    this.showTable = false;
    this.showTableB = true;
    this.http.get(url).subscribe((data: any) => {
      if (data.error !== "") {
        alert(data.error);
      } else {
        this.isLoading = false;
        let len = data.data.length;
        for (let i = 0; i < len; i++) {
          data.data[i].Memo = this.makeMemo(data.data[i].Memo);
        }
        this.MessageInfoB = data.data;
        if(this.MessageInfoB.length<1){
          alert('暂无有关数据');
        }
      }
    })
  }


  /**
   *  重新整理传入的备案字符串
   * @param str  传入的备案数据字符串
   */
  makeMemo(str) {
    let tempStr;
    let reg1 = /\<YBAQK\>/;
    let reg2 = /\<\/YBAQK\>/;
    let reg3 = /\<BCBAQK\>/;
    let reg4 = /\<\/BCBAQK>/;
    if (str == null) {
      return '无备案';
    } else {
      tempStr = str.replace(reg1, '原备案情况: ');
      tempStr = tempStr.replace(reg2, '; ');
      tempStr = tempStr.replace(reg3, '本次备案情况: ');
      tempStr = tempStr.replace(reg4, '。');
      return tempStr;
    }

  }


}
