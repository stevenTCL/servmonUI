import { Component } from '@angular/core';

import { AreaA } from '../areaa/areaa';
import { LogPage } from '../log/log';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  areas = [];
  pages = [AreaA, AreaA, AreaA];
  tab1Root:any = LogPage;

  constructor() {
  	for (var i = 0; i < 3; i++) {
      this.areas.push( {
  			title: "Area " + String.fromCharCode(65 + i),
  			page: this.pages[i]
  		} );
    }
  }

}
