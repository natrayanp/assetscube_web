import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../accommonmod/alertmod/alertcore/alert.service';
import { ApiserviceService } from '../../../accore/apiservice/apiservice.service';
import { FbauthService } from '../../../accore/fbauthservice/fbauth.service';

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
              private cd: ChangeDetectorRef,
              private auth: FbauthService,
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
      this.signup_error_page('');      
    } else if (this.allParams['msg'] === 'success') {
      this.signup_success_handler();
    } else {
      this.signup_error_page('');      
    }
  }

  signup_error_page(msg) {
      if (msg === '') {
      this.notidata = {'id': this.id1, 'msg':'Sign up failed.  Please try again. <br> [Reason: ' + this.allParams['msg'] + ']', 'msgtyp':'error', 'comptyp': 'alert', 'canclose': 'no' };
      } else {
        this.notidata = {'id': this.id1, 'msg': msg, 'msgtyp':'error', 'comptyp': 'alert', 'canclose': 'no' };
      }
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
                  this.send_pass_resetemail(res.body);
                },
      (errors: any) => {
                  console.log(errors);
                  this.signup_error_page(errors.error.msg);
                }
    )
      
    
  }

send_pass_resetemail(res) {
  console.log(res);
  let msg  = res.msg;
  this.auth.resetPassword(res.email)
  .then(() => {
    msg = msg + "<br> Passwordreset email sent to your registered email."
    this.signup_success_page(msg);
  })
  .catch(error => {
    this.signup_error_page(error);
  }
  );  
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
