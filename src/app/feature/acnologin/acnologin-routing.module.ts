import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchomeComponent } from './achome/achome.component';
import { AcloginComponent } from './aclogin/aclogin.component';

const routes: Routes = [
  { path: '', component: AchomeComponent,
    children : [
      { path: 'login', component: AcloginComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnologinRoutingModule { }
