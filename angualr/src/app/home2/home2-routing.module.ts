import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2.component';


const routes: Routes = [
  {
    path:'home2',component:Home2Component
  },
  {
    path: '**',
    redirectTo: '/home2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule { }
