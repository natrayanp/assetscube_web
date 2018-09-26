import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from '../../../accore/apiservice/apiservice.service';

@Component({
  selector: 'app-achome',
  templateUrl: './achome.component.html',
  styleUrls: ['./achome.component.scss']
})
export class AchomeComponent implements OnInit {

  constructor(
                private router: Router,
                private api: ApiserviceService
              ) { }

  ngOnInit() {
  }

  navclick(event) {
    switch (event) {
      case ('register'): {
        // this.router.navigate(['/login']);
        // window.location.href = 'http://localhost:8080/appsignup?type=signup&appid=12323235565656&home=http://localhost:4200';
        console.log("print inside register")
        this.api.apiget('regis')
        .subscribe(
          (res: any) => window.location.href = res.url,
          (err) => console.log(err)
        );
        break;
      }
      case ('login'): {
        this.router.navigate(['/login/signup']);
        break;
      }
    }
  }

}
