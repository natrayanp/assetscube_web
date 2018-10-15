import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcinterceptorService {

 
  authReq: any;
  hasidtkn: boolean;
  hassess: boolean;
  haschg: boolean;
  isaddtkn: boolean;
  idtkn: string;
  sess = null;
  skip: boolean;

  headers: HttpHeaders = new HttpHeaders();

  constructor(/*private auth: FirebaseauthService*/) {  }
  
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.skip = false;
    console.log(req.url);
    const entityid = sessionStorage.getItem('entityid');
    const countryid = sessionStorage.getItem('countryid');
    console.log(entityid);

    this.headers = this.setHeader(this.headers, 'entityid', entityid);
    this.headers = this.setHeader(this.headers, 'countryid', countryid);

    if (req.url.endsWith('signup') || req.url.endsWith('appnldetail') || req.url.endsWith('ncappsingupres')) {
      this.skip = true;
      this.isaddtkn = false;
    }

    if (!this.skip) {

      if (!this.isaddtkn) {
        console.log('token id start');
        // this.idtkn = this.auth.get_id_token();
        console.log('token id end');
        // this.sess = this.auth.get_session(null);
        console.log(this.idtkn);
      }
      console.log(this.idtkn);
      console.log((this.idtkn) !== undefined);


      if ((this.idtkn) !== undefined) {
        this.headers = this.setHeader(this.headers, 'Authorization', 'Bearer ' + this.idtkn);
      }

      if (this.sess !== null) {
        this.headers = this.setHeader(this.headers, 'mysession', this.sess);
      }

      req = req.clone({headers: this.headers});
    
      return next.handle(req);
    } else {
      req = req.clone({headers: this.headers});
      return next.handle(req);
    }

}


setHeader(headers, key , value) {
  return headers.set(key, value);
}
}