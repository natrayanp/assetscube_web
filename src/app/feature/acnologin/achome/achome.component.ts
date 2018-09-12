import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achome',
  templateUrl: './achome.component.html',
  styleUrls: ['./achome.component.scss']
})
export class AchomeComponent implements OnInit {

  constructor(
                private router: Router,
              ) { }

  ngOnInit() {
  }

  navclick(event) {
    switch (event) {
      case ('login'): {
        // this.router.navigate(['/login']);
        window.location.href = 'http://localhost:4201/login/signup?type=signup&appid=12323235565656&home=http://localhost:4200';
        break;
      }
      case ('register'): {
        this.router.navigate(['/login/signup']);
        break;
      }
    }
  }

}
