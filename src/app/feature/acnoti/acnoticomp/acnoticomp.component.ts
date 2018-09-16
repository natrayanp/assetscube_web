import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../accommonmod/alertmod/alertcore/alert.service';


@Component({
  selector: 'app-acnoticomp',
  templateUrl: './acnoticomp.component.html',
  styleUrls: ['./acnoticomp.component.scss']
})
export class AcnoticompComponent implements OnInit {
  id1: string;
  notidata: any;
  constructor(
              private notify: AlertService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.notidata = {};
    this.id1 = this.notify.get_unq_id();
    this.generate_page();
  }

  generate_page() {
    
    const allParams = this.route.snapshot.queryParams; // allParams is an object
    if (allParams['type'] === 'signup'){
      this.signup_generate_page(allParams);
    }
    
  }

  signup_generate_page(allParams) {
    if (allParams['regdata'] === '401') {
      this.notidata = {'id': this.id1, 'msg':'Sign up failed.  Please try again. [Reason: ' + allParams['msg'] + ']', 'msgtyp':'error', 'comptyp': 'alert', 'canclose': 'no' };
      // this.notify.update(this.id1, , 'error', 'alert', 'no');
    } else {
      // this.notify.update(this.id1, 'Sign up completed', , , );
    }
  }

  ngAfterViewChecked() {
    this.notify.clearalertmsg();
      if (JSON.stringify(this.notidata) !== '{}') {
        console.log('creating alert');
        this.notify.update(this.notidata.id, this.notidata.msg, this.notidata.msgtyp, this.notidata.comptyp, this.notidata.canclose);
      }
      
  }

}
