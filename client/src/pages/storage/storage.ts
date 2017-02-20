import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  name: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.partitions = navParams.get('machine').data.storagePartitions; 
    this.name = navParams.get('machine').name;
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
