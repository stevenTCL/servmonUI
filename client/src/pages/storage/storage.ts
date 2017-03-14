import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineMetrics } from '../../providers/machine-metrics';

/*
  Generated class for the Storage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html'
})
export class StoragePage {

  partitions = [];
  hostname: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private machineMetrics: MachineMetrics) {
    this.hostname = navParams.get('machine').hostname;
    machineMetrics.getMetrics(['storage'], this.hostname).subscribe(metrics => {
      this.partitions = metrics[0].data.storageData.storagePartitions;
    })
  }

  // Buggy Function ! only use when "XXXGB/YYYYGB"
  getStoragePercent(storage) {
    return ((100*parseInt(storage.slice(0,3))/parseInt(storage.slice(6,10))).toString()).slice(0,4) +'%';
  }

  numState(strNum) {
    if (parseInt(strNum) > 75 ) 
      return 2;
    
    else if (parseInt(strNum) > 40 ) 
      return 1;

    else return 0;
  }
}
