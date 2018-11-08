import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnotiRoutingModule } from './acnoti-routing.module';
import { AcnoticompComponent } from './acnoticomp/acnoticomp.component';

import { AcsharedModule } from '../../acshared/acshared.module';
import { AlertmodModule } from '../../accommonmod/alertmod/alertmod.module';
import { AcnawalcallbkComponent } from './acnawalcallbk/acnawalcallbk.component';
import { AcloginchkComponent } from './acloginchk/acloginchk.component';

@NgModule({
  imports: [
    CommonModule,
    AcnotiRoutingModule,
    AcsharedModule,
    AlertmodModule
  ],
  declarations: [AcnoticompComponent, AcnawalcallbkComponent, AcloginchkComponent]
})
export class AcnotiModule { }
