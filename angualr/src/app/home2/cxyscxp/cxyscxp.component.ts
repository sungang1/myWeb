import { Component, OnInit } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
 
import { env } from '../../env';
@Component({
  selector: 'app-cxyscxp',
  templateUrl: './cxyscxp.component.html',
  styleUrls: ['./cxyscxp.component.css']
})
export class CxyscxpComponent implements OnInit {
  dateFormat = 'yyyy-MM-dd'; // 日期选择框日期显示格式
  dateRange; // 开始和结束日期的数据
  SYDWBH = '';  // 商业单位编号
  MessageInfo; // 接收后端数据
  showTable = false; // 是否展示表格
  isLoading = true; // 是否在加载中
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
 /**
  *  请求查询
  */
  query() {
    let url = env.Api(12997);
    if (this.dateRange == undefined) {
      alert('未选择日期');
      return;
    } else if (this.SYDWBH.trim() == '') {
      alert('商业单位不可以为空');
      return;
    } else {

      let obj = {
        "startdate": this.DateFormat(this.dateRange[0]),
        "enddate": this.DateFormat(this.dateRange[1]),
        "SYDWBH": this.SYDWBH.trim()
      }
      this.isLoading = true;
      this.showTable = true;
      this.http.post(url, obj).subscribe((data: any) => {
        if (data.error !== '') {
          alert(data.error);
        } else {
          this.isLoading = false;
          this.MessageInfo = data.data;
          if(this.MessageInfo.length<1){
            alert('暂无数据，请认真检查输入的条件');
          }
        }
      })
    }
  }
  /**
   * 
   * @param obj  传入日期
   *  返回统一格式日期
   */
  DateFormat(obj) {
  
    let date = new Date(obj);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}
