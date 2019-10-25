declare var mui: any;
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Component({
  selector: 'app-cxyscx',
  templateUrl: './cxyscx.component.html',
  styleUrls: ['./cxyscx.component.css']
})
export class CxyscxComponent implements OnInit {
  startDate;   // 开始日期
  endDate;     // 结束日期
  SYDWBH = '';  // 商业单位编号
  MessageInfo; // 接收后端数据
  showTable = false; // 是否展示表格
  isLoading = false; // 是否在加载中
  dataNull = false;// 数据长度为0
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  /**
   *  请求查询
   */
  query() {
    let url = env.Api(12997);
    if (this.startDate == undefined || this.endDate == undefined) {
      alert('开始或者结束日期未选择');
      return;
    } else if (this.SYDWBH.trim() == '') {
      alert('商业单位不可以为空');
      return;
    } else {
      let obj = {
        "startdate": this.startDate,
        "enddate": this.endDate,
        "SYDWBH": this.SYDWBH.trim()
      }
      this.isLoading = true;
      this.showTable = true;
      this.dataNull = false;
      this.http.post(url, obj).subscribe((data: any) => {
        if (data.error !== '') {
          alert(data.error);
        } else {
          this.isLoading = false;

          this.MessageInfo = data.data;
          if (this.MessageInfo.length < 1) {
            this.dataNull = true;
          }
        }
      })
    }
  }
 


  goto() {
    history.go(-1);
  }


  makeDtpickerStart() {
    let date = new mui.DtPicker({
      type: 'date',
      beginDate: new Date(2000, 11, 25),//设置开始日期 
      endDate: new Date(2050, 11, 25)
    })//设置结束日期 );
    let _this = this;
    date.show(function (selectItems) {
      const y = selectItems.y.text;  //获取选择的年
      const m = selectItems.m.text;  //获取选择的月
      const d = selectItems.d.text;  //获取选择的日
      _this.startDate = y + "-" + m + "-" + d;
    })
  }
  makeDtpickerEnd() {
    let date = new mui.DtPicker({
      type: 'date',
      beginDate: new Date(2000, 11, 25),//设置开始日期 
      endDate: new Date(2050, 11, 25)
    })//设置结束日期 );
    let _this = this;
    date.show(function (selectItems) {
      const y = selectItems.y.text;  //获取选择的年
      const m = selectItems.m.text;  //获取选择的月
      const d = selectItems.d.text;  //获取选择的日
      _this.endDate = y + "-" + m + "-" + d;
    })
  }





test=[{
   SYDW:'svhd',
   HDKSRQ :"Sjhdbjh",
   HDJSRQ :"sndjansd",
   YY :"sndjansd",
   CP :"sndjagyty",
   SL :"asdtewruywe",
   ZPSL :"sabhdfgtadrftt",
   JG :"sabhdfgtadrftt",
   BZ :"sabhdfgtadrftt",
   YWY: "sndjansd",
   YSDH:"asdtewruywe" },{
    SYDW :"asdtewruywe",
    HDKSRQ :"asdtewruywe",
    HDJSRQ :"asdtewruywe",
    YY :"asdtewruywe",
    CP :"asdtewruywe",
    SL :"asdtewruywe",
    ZPSL :"asdtewruywe",
    JG :"asdtewruywe",
    BZ :"asdtewruywe",
    YWY :"asdtewruywe",
    YSDH :"asdtewruywe",
   }
]








}
