import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
 
import { Home1Module } from './home1/home1.module';
import { Home2Module } from './home2/home2.module';
import { CxyscxpComponent } from './home2/cxyscxp/cxyscxp.component';
import { DwbapComponent } from './home2/dwbap/dwbap.component';
import { SydwcxpComponent } from './home2/sydwcxp/sydwcxp.component';
import { Home2Component } from './home2/home2.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
     CxyscxpComponent,
     DwbapComponent,
      SydwcxpComponent,
      Home2Component
    // Home1Component,
    // Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Home1Module,
    Home2Module
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
