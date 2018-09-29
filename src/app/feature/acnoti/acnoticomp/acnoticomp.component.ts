import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../accommonmod/alertmod/alertcore/alert.service';
import { ApiserviceService } from '../../../accore/apiservice/apiservice.service';



@Component({
  selector: 'app-acnoticomp',
  templateUrl: './acnoticomp.component.html',
  styleUrls: ['./acnoticomp.component.scss']
})
export class AcnoticompComponent implements OnInit {
  id1: string;
  notidata: any;
  allParams: any;
  constructor(
              // private notify: AlertService,
              private route: ActivatedRoute,
              private api: ApiserviceService
              ) { }

  ngOnInit() {
    /*
    this.notidata = {};
    this.id1 = this.notify.get_unq_id();
    this.allParams = this.route.snapshot.queryParams; // allParams is an object
    this.noti_handler();    
    //this.generate_page();
    */
  }



  noti_handler() {       
    if (this.allParams['type'] === 'signup'){
      this.signup_handler();
    }
    
  }

  signup_handler() {
    if (this.allParams['regdata'] === '401') {
      this.signup_error_page();      
    } else if (this.allParams['msg'] === 'success') {
      this.signup_success_handler();
    } else {
      this.signup_error_page();      
    }
  }

  signup_error_page() {
      this.notidata = {'id': this.id1, 'msg':'Sign up failed.  Please try again. [Reason: ' + this.allParams['msg'] + ']', 'msgtyp':'error', 'comptyp': 'alert', 'canclose': 'no' };
  }

  signup_success_handler() {
    const dat = {'regdata': this.allParams['regdata']}
    this.api.apipost('acsignupcallbk',dat)
    .subscribe(
      res => {

      },
      errors => {

      }
    )
      
    
  }


  ngAfterViewChecked() {
/*
    this.notify.clearalertmsg();
      if (JSON.stringify(this.notidata) !== '{}') {
        console.log('creating alert');
        this.notify.update(this.notidata.id, this.notidata.msg, this.notidata.msgtyp, this.notidata.comptyp, this.notidata.canclose);
      }
  */    
  }

  navclick(e) {
    console.log('ddd');
  }

}
