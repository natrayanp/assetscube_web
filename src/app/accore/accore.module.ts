import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { ApiserviceService } from './apiservice/apiservice.service';
import { AcinterceptorService } from './interceptor/acinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FbauthService } from './fbauthservice/fbauth.service';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [],
  providers: [
    ApiserviceService,
    AcinterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: AcinterceptorService, multi: true, },
    FbauthService
  ]
})
export class AccoreModule { }
