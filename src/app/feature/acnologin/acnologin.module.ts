import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnologinRoutingModule } from './acnologin-routing.module';
import { AchomeComponent } from './achome/achome.component';

import { AcsharedModule } from '../../acshared/acshared.module';

@NgModule({
  imports: [
    CommonModule,
    AcnologinRoutingModule,
    AcsharedModule
  ],
  declarations: [AchomeComponent]
})
export class AcnologinModule { }
