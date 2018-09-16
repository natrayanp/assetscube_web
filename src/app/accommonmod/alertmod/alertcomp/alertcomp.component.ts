import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../alertcore/alert.service';

@Component({
  selector: 'app-alertcomp',
  templateUrl: './alertcomp.component.html',
  styleUrls: ['./alertcomp.component.scss']
})
export class AlertcompComponent implements OnInit {

  @Input() public id: string;
  alert_id: string;
  private subscription: any;

  constructor(public notify: AlertService) { }

  ngOnInit() {
    console.log('insider alerts');
    console.log(this.id);
    this.alert_id = this.id;
 }

}
