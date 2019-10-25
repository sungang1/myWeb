import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { CxyscxpComponent } from './home2/cxyscxp/cxyscxp.component';
import { DwbapComponent } from './home2/dwbap/dwbap.component';
import { SydwcxpComponent } from './home2/sydwcxp/sydwcxp.component';


const routes: Routes = [{
  path: 'phone', loadChildren: './home1/home1.module#Home1Module'
}, {
  path: 'pc', component: Home2Component,
  children: [{ path: 'cxyscxp', component: CxyscxpComponent },
  { path: 'dwbap', component: DwbapComponent }, {
    path: 'sydwcxp', component: SydwcxpComponent
  }]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
