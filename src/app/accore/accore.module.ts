import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiserviceService } from './apiservice/apiservice.service';
import { AcinterceptorService } from './interceptor/acinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiserviceService,
    AcinterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: AcinterceptorService, multi: true, },
  ]
})
export class AccoreModule { }
