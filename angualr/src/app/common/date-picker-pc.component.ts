import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-date-picker-pc',
  template: `<nz-date-picker [(ngModel)]="dateStart" [nzFormat]='dateFormat' [nzPlaceHolder]='startTip' 
  (ngModelChange)="onStartChange( )"></nz-date-picker>
  <nz-date-picker [(ngModel)]="dateEnd"  [nzFormat]='dateFormat' [nzPlaceHolder]='endTip' 
  (ngModelChange)="onEndChange( )"></nz-date-picker>
  `,
})
export class DatePickerPcComponent implements OnInit, OnDestroy {
  startTip = '起始时间';
  endTip = '结束时间';
  @Input() dateFormat: string; // 显示日期格式
  @Output() DateStart = new EventEmitter();
  @Output() DateEnd = new EventEmitter();
  pickerStart = new Subject<any>();
  pickerEnd = new Subject<any>();
  subscriptionStart: Subscription;
  subscriptionEnd: Subscription;
  constructor() { }
  dateStart;
  dateEnd;
  ngOnInit() {
    this.subscriptionStart = this.pickerStart.subscribe(e => {
      this.DateStart.emit(e);
    });
    this.subscriptionEnd = this.pickerEnd.subscribe(e => {
      this.DateEnd.emit(e);
    });
  }

  ngOnDestroy() {
    this.subscriptionStart.unsubscribe();
    this.subscriptionEnd.unsubscribe();
  }


  onStartChange() {
    this.pickerStart.next(this.dateStart);

  }
  onEndChange() {
    this.pickerEnd.next(this.dateEnd);
  }

  /**
   * 使用事项
   *   应该把这个组件引入到某个module中
   *   <app-date-picker-pc (DateStart)="xx($event)" (DateEnd)="xx($event)" [dateFormat]="'yyyy/MM/dd'"></app-date-picker-pc>
   *   引用的该组件的ngModule
   *   NgZorroAntdModule,
   *   FormsModule,
   *   ReactiveFormsModule,
   *   
   *   注意日期的格式 是双引号里面再加上单引号
   */








}
