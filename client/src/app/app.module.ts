import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CPUPage } from '../pages/CPU/CPU';
import { RAMPage } from '../pages/RAM/RAM';
import { StoragePage } from '../pages/storage/storage';
import { ProcessPage } from '../pages/process/process';
import { AreaA } from '../pages/areaa/areaa';
import { LogPage } from '../pages/log/log';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { MachineMetrics } from '../providers/machine-metrics';

@NgModule({
  declarations: [
    MyApp,
    CPUPage,
    RAMPage,
    StoragePage,
    ProcessPage,
    AreaA,
    LogPage,
    TabsPage,
    ProgressBarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CPUPage,
    RAMPage,
    StoragePage,
    ProcessPage,
    AreaA,
    LogPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MachineMetrics]
})
export class AppModule {}
