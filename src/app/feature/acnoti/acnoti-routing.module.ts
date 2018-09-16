import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcnoticompComponent } from './acnoticomp/acnoticomp.component';

const routes: Routes = [
  { path: '', component: AcnoticompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnotiRoutingModule { }
