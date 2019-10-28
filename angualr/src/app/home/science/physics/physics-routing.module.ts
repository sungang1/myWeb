import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantumComponent } from './quantum/quantum.component';
import { AirComponent } from './air/air.component';


const routes: Routes = [{
  path: 'quantum', component: QuantumComponent
},{
  path:'air',component:AirComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicsRoutingModule { }
