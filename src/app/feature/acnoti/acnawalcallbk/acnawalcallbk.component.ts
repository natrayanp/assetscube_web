import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../accommonmod/alertmod/alertcore/alert.service';
import { ApiserviceService } from '../../../accore/apiservice/apiservice.service';

@Component({
  selector: 'app-acnawalcallbk',
  templateUrl: './acnawalcallbk.component.html',
  styleUrls: ['./acnawalcallbk.component.scss']
})
export class AcnawalcallbkComponent implements OnInit, AfterViewChecked {
  allParams: any;
  id1: string;
  notidata: any;

  constructor(
              private notify: AlertService,
              private route: ActivatedRoute,
              private api: ApiserviceService,
              private cd: ChangeDetectorRef
              ) { }


  ngOnInit() {
    this.notidata = {};
    this.id1 = this.notify.get_unq_id();
    this.allParams = this.route.snapshot.queryParams; // allParams is an object
    this.noti_handler();    
    //this.generate_page();
  }



  noti_handler() {       
    if (this.allParams['type'] === 'signup'){
      this.signup_handler();
    }
    
  }

  signup_handler() {
    console.log(this.allParams['msg']);
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

  signup_success_page(msg) {
    console.log(msg);
    this.notidata = {'id': this.id1, 'msg': msg, 'msgtyp':'error', 'comptyp': 'alert', 'canclose': 'no' };
}


  signup_success_handler() {
    const dats = {'type': this.allParams['type'], 'callbkfrm': 'nawalcube', 'regdata': this.allParams['regdata'], 'msg': this.allParams['msg'] };
    console.log(dats);
    this.api.apipost('acsignupcallbk',dats)
    .subscribe(
      (res:any) =>    {
                  console.log(res);
                  this.signup_success_page(res.body.msg);
                },
      errors => {
                  console.log(errors);
                  this.signup_error_page();
                }
    )
      
    
  }


  ngAfterViewChecked() {

    this.notify.clearalertmsg();
    if (JSON.stringify(this.notidata) !== '{}') {
      console.log('creating alert');
      this.notify.update(this.notidata.id, this.notidata.msg, this.notidata.msgtyp, this.notidata.comptyp, this.notidata.canclose);
      this.cd.detectChanges();
    }
    
  }


}
