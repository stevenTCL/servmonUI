import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineMetrics } from '../../providers/machine-metrics';

/*
  Generated class for the Process page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-process',
  templateUrl: 'process.html'
})
export class ProcessPage {

  process = {};
  hostname: string;
  pid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private machineMetrics: MachineMetrics) {
    this.hostname = navParams.get('machine').hostname;
    this.pid = navParams.get('machine').pid;
    machineMetrics.getMetrics(['process'], this.hostname, this.pid).subscribe(metrics => {   
      this.process = metrics[0].data.processData;
    });
  }

  numState(strNum) {
    if (parseInt(strNum) > 75 ) 
      return 2;
    
    else if (parseInt(strNum) > 40 ) 
      return 1;

    else return 0;
  }
}
