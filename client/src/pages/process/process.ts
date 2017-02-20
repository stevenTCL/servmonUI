import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.process = navParams.get('machine').data.processes[0]; 
  }

  numState(strNum) {
    if (parseInt(strNum) > 75 ) 
      return 2;
    
    else if (parseInt(strNum) > 40 ) 
      return 1;

    else return 0;
  }
}
