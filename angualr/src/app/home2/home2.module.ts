import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
 
import { Home2Component } from './home2.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CxyscxpComponent } from './cxyscxp/cxyscxp.component';
import { DwbapComponent } from './dwbap/dwbap.component';
import { SydwcxpComponent } from './sydwcxp/sydwcxp.component';


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    NgZorroAntdModule,
  ]
})
export class Home2Module { }
