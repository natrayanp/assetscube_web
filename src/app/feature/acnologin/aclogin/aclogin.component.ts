import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../accore/apiservice/apiservice.service';

@Component({
  selector: 'app-aclogin',
  templateUrl: './aclogin.component.html',
  styleUrls: ['./aclogin.component.scss']
})
export class AcloginComponent implements OnInit {

  constructor( private api: ApiserviceService) { }

  ngOnInit() {
  }

  login(btn_nm) {
    this.api.apipost('login',{'login_site': btn_nm})
    .subscribe(
      (res: any) => window.location.href = res.body.url,
      (err) => console.log(err)
    );
    /*
    switch(btn_nm) {
      case('nawalcube'): {

        break;
      }
      case('upstox'): {
        this.api.apipost('login',{'login_site': btn_nm})
        .subscribe(
          (res: any) => window.location.href = res.url,
          (err) => console.log(err)
        );
        break;
      }
    }
    */
  }

}
