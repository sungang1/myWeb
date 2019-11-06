import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicsRoutingModule } from './physics-routing.module';
import { QuantumComponent } from './quantum/quantum.component';
import { AirComponent } from './air/air.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { DatePickerPcComponent } from 'src/app/common/date-picker-pc.component';
@NgModule({
  declarations: [QuantumComponent, AirComponent, DatePickerPcComponent],
  imports: [
    CommonModule,
    PhysicsRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      // modules: {
      //   syntax: true,
      //   toolbar: [
      //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      //     ['blockquote', 'code-block'],
      //     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      //     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      //     [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      //     [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      //     [{ 'direction': 'rtl' }],                         // text direction
      //     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      //     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      //     [{ 'font': [] }],
      //     [{ 'align': [] }],

      //     ['clean'],                                         // remove formatting button

      //     ['link', 'image', 'video']                         // link and image, video
      //   ]
      // }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhysicsModule { }
