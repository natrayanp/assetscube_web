import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnotiRoutingModule } from './acnoti-routing.module';
import { AcnoticompComponent } from './acnoticomp/acnoticomp.component';

import { AcsharedModule } from '../../acshared/acshared.module';
import { AlertmodModule } from '../../accommonmod/alertmod/alertmod.module';

@NgModule({
  imports: [
    CommonModule,
    AcnotiRoutingModule,
    AcsharedModule,
    AlertmodModule
  ],
  declarations: [AcnoticompComponent]
})
export class AcnotiModule { }
