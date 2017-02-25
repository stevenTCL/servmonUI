import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CPUPage } from '../CPU/CPU';
import { RAMPage } from '../RAM/RAM';
import { StoragePage } from '../storage/storage';
import { ProcessPage } from '../process/process';


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
  constructor(public navCtrl: NavController) {
    this.machines = [{
    	hostname: "Machine 1",
      status: false,
      showDetails: false,
      data: {
        CPU: "20%",
        CPUData: {
          histRec:[
            {
              "label": "01:00",
              "value": "15%"
            },
            {
              "label": "02:00",
              "value": "14%"
            },
            {
              "label": "03:00",
              "value": "23%"
            },
            {
              "label": "04:00",
              "value": "91%"
            },
            {
              "label": "05:00",
              "value": "55%"
            },
            {
              "label": "06:00",
              "value": "83%"
            },
            {
              "label": "07:00",
              "value": "19%"
            }
          ],
          cores: [{
            name: "Core 1",
            usage: "20%",
            frequency: "1000MHz"
          },{
            name: "Core 2",
            usage: "30%",
            frequency: "1200MHz"
          }]
        },
        storage: "80%",
        storageData: {
          storagePartitions: [{
            name: "Partition",
            filesystem:"/dev/sda1",
            mountPt:"/",
            storage: "600GB/1000GB"
          }]
        },
        RAM: "65%",
        RAMData: {
          histRec:[
            {
              "label": "01:00",
              "value": "15%"
            },
            {
              "label": "02:00",
              "value": "14%"
            },
            {
              "label": "03:00",
              "value": "23%"
            },
            {
              "label": "04:00",
              "value": "91%"
            },
            {
              "label": "05:00",
              "value": "55%"
            },
            {
              "label": "06:00",
              "value": "83%"
            },
            {
              "label": "07:00",
              "value": "19%"
            }
          ],
          totalMemory: "3.90GB/16.00GB",
          buffers: "9GB",
          swapUsage: "1GB/16GB"
        },
        processes:[{
          name: "Process 1-1",
          status: false,
          PID: "13203",
          UIDs: "0(root)/1(daemon)",
          GUIDs: "3(user)/3(sys)",
          CPUOccupied: "15%",
          RAMOccupied: "900MB/7%"    
        }]
      }
    },{
      hostname: "Machine 2",
      status: true,
      showDetails: false,
      data: {
        CPU: "76%",
        CPUs: [{
            name: "1st CPU",
            usage: "20%",
            frequency: "1000MHz"
          },{
            name: "2nd CPU",
            usage: "30%",
            frequency: "1200MHz"
          }],
        storage: "30%",
        storagePartitions: [{
          name: "Partition",
          filesystem:"/dev/sda1",
          mountPt:"/",
          storage: "600GB/1000GB"
        }],
        RAM: "69%",
        RAMData: {
          histRec:[
            {
              "label": "01:00",
              "value": "15%"
            },
            {
              "label": "02:00",
              "value": "14%"
            },
            {
              "label": "03:00",
              "value": "23%"
            },
            {
              "label": "04:00",
              "value": "91%"
            },
            {
              "label": "05:00",
              "value": "55%"
            },
            {
              "label": "06:00",
              "value": "83%"
            },
            {
              "label": "07:00",
              "value": "19%"
            }
          ],
          totalMemory: "3.90GB/16.00GB",
          buffers: "9GB",
          swapUsage: "1GB/16GB"
        },
        processes:[{
          name: "Process 2-1",
          status: true,
          PID: "13203",
          UIDs: "0(root)/1(daemon)",
          GUIDs: "3(user)/3(sys)",
          CPUOccupied: "15%",
          RAMOccupied: "900MB/7%"    
        },{
          name: "Process 2-2",
          status: true,
          PID: "13203",
          UIDs: "0(root)/1(daemon)",
          GUIDs: "3(user)/3(sys)",
          CPUOccupied: "15%",
          RAMOccupied: "900MB/7%"    
        
        }]
      }
    }];
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
        machine.showDetails = true;
    }
  }

  alertTriggered(machine) {
    if (machine.status === false)
      return true;
    if (machine.data.processes[0].status === false)
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
