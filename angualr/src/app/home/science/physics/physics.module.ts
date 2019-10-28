import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicsRoutingModule } from './physics-routing.module';
import { QuantumComponent } from './quantum/quantum.component';
import { AirComponent } from './air/air.component';


@NgModule({
  declarations: [QuantumComponent, AirComponent],
  imports: [
    CommonModule,
    PhysicsRoutingModule
  ]
})
export class PhysicsModule { }
