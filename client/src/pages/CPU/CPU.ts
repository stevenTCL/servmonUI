import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

declare var FusionCharts;

@Component({
  selector: 'page-CPU',
  templateUrl: 'CPU.html'
})
export class CPUPage {
	CPUData;
  hostname: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.CPUData = navParams.get("machine").data.CPUData;
    this.hostname = navParams.get('machine').hostname;
    FusionCharts.ready(function() {
      var revenueChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-CPU',
        width: '100%',
        height: '200',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "caption": "Historical Usage of CPU",
            "subCaption": "past 24 hours",
            "xAxisName": "Time",
            // "yAxisName": "%",
            "lineThickness": "2",
            "paletteColors": "#0075c2",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "13",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "yAxisMaxValue": "100",
            "yAxisMinValue": "0"
          },
          "data": navParams.get("machine").data.CPUData.histRec,
          "trendlines": [
            {
              "line": [{
                "isTrendZone": "1",
                "startvalue": "100",
                "endValue": "80",
                "color": "#ff0d1c",
                "valueOnRight": "1",
                "alpha": "30",
                "tooltext": "Alert zone is defined as $endDataValue" +  "% to $startDataValue"+ "%",
                "displayvalue": " "
              }]
            }
          ]
        }
      }).render();
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
