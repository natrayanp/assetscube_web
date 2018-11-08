import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcnoticompComponent } from './acnoticomp/acnoticomp.component';
import { AcnawalcallbkComponent } from './acnawalcallbk/acnawalcallbk.component';
import { AcloginchkComponent } from './acloginchk/acloginchk.component';

const routes: Routes = [
  { path: '', component: AcnoticompComponent,
    children: [
      { path: 'nc', component: AcnawalcallbkComponent},
      { path: 'lgchk', component: AcloginchkComponent}
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnotiRoutingModule { }
