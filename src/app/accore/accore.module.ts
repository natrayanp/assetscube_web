import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiserviceService } from './apiservice/apiservice.service';
import { AcinterceptorService } from './interceptor/acinterceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiserviceService,
    AcinterceptorService
  ]
})
export class AccoreModule { }
