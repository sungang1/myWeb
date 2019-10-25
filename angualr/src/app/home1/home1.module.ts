import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home1RoutingModule } from './home1-routing.module';
import { CxyscxComponent } from './cxyscx/cxyscx.component';
import { DwbaComponent } from './dwba/dwba.component';
import { SydwcxComponent } from './sydwcx/sydwcx.component';
import { Home1Component } from './home1.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CxyscxComponent, DwbaComponent, SydwcxComponent,Home1Component],
  imports: [
    CommonModule,
    Home1RoutingModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class Home1Module { }
