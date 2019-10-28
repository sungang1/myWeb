import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { PhysicsModule } from './physics/physics.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScienceRoutingModule,
    PhysicsModule
  ]
})
export class ScienceModule { }
