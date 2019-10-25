import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1.component';
import { CxyscxComponent } from '../home1/cxyscx/cxyscx.component';
import { DwbaComponent } from '../home1/dwba/dwba.component';
import { SydwcxComponent } from '../home1/sydwcx/sydwcx.component';


const routes: Routes = [{
  path:'home',component:Home1Component
},
{
  path:'cxyscx',component:CxyscxComponent
},
{
path:'dwba',component:DwbaComponent
},
{
  path:'sydwcx',component:SydwcxComponent
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home1RoutingModule { }
