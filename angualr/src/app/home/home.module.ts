import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ScienceModule } from './science/science.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    ScienceModule
  ]
})
export class HomeModule { }
