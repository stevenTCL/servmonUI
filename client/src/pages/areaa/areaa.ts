import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CPUPage } from '../CPU/CPU';
import { RAMPage } from '../RAM/RAM';
import { StoragePage } from '../storage/storage';
import { ProcessPage } from '../process/process';

import { Hosts } from '../../models/hosts';
import { Metrics } from '../../models/metrics';
import { MachineHosts } from '../../providers/machine-hosts';
import { MachineMetrics } from '../../providers/machine-metrics';

@Component({
  selector: 'page-areaa',
  templateUrl: 'areaa.html'
})
export class AreaA {
  CPUPage = CPUPage;
  RAMPage = RAMPage;
  StoragePage = StoragePage;
  ProcessPage = ProcessPage;
  machines = [];
  constructor(public navCtrl: NavController, private machineHosts: MachineHosts, private machineMetrics: MachineMetrics) {
    machineHosts.getHosts().subscribe(hosts => {
      this.machines = hosts;
      for (let machine of this.machines) {
         machine.showDetails = false
      }
    });
  }

  changePage(event, SecondPage) {
    this.navCtrl.push(SecondPage, {
      machine: this.machines[0]
    });
  }    

  toggleDetails(machine) {
    if (machine.showDetails) {
        machine.showDetails = false;
    } else {
        this.machineMetrics.getMetrics([],machine.hostname).subscribe(metrics => {
          // Assign the values of metrics[0] to machine
          Object.assign(machine, metrics[0]);
          console.log(metrics);
          machine.showDetails = true;
        });
    }
  }

  alertTriggered(machine) {
    if (machine.status === false)
      return true;
    if (machine.process === false)
      return true;
    //TODO: if data > 80% return true

  }
  numState(strNum) {
    if (parseInt(strNum) > 75 ) 
      return 2;
    
    else if (parseInt(strNum) > 40 ) 
      return 1;

    else return 0;
  }
  // sortProcessesByErr(processes) {
  //   var sortedProcesses = [];
  //   var processesWithoutErr = [];
  //   for (var process in processes) {
  //     if (process.status)
  //       processesWithoutErr.push(process);
  //     else
  //       sortedProcesses.push(process);
  //   }
  //   sortedProcesses.concat(processesWithoutErr);
  //   return sortedProcesses;
  // }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     for (let i = 0; i < 10; i++) {
  //       this.items.push( this.items.length );
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 500);
  // }

}
