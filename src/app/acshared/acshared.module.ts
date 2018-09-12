import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcmaterialModule } from './acmaterial/acmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActopnavComponent } from './actopnav/actopnav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AcmaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ActopnavComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AcmaterialModule,
    FlexLayoutModule,
    ActopnavComponent
  ]
})
export class AcsharedModule { }
