import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {
	log = [];
  constructor(public navCtrl: NavController) {
  	this.log = [{
  		nature: "Dismiss",
  		desc: "The alert of App 1: Machine 1 of Area A is dismissed. Handled by Sam Pete.",
  		time: "2017-2-1 10:22:45"
  	},{
  		nature: "Alert",
  		desc: "App 1: Machine 1 of Area A triggered an alert.",
  		time: "2017-2-1 10:21:02"
  	}];
  }

  getNumOfLog() {
  	return this.log.length;
  }
  isNormal(msg) {
    return msg.nature === "Dismiss";
  }

  isAlert(msg) {
    return msg.nature === "Alert";
  }

  isWarning(msg) {
    return msg.nature === "warning";
  }

}
