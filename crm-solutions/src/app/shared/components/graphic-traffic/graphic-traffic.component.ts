import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'crm-graphic-traffic',
  templateUrl: './graphic-traffic.component.html',
  styleUrls: ['./graphic-traffic.component.scss']
})
export class GraphicTrafficComponent implements OnInit {

  public LineChart: any = [];
  private colorBc;

  constructor() {}

  ngOnInit() {
    this.buildChart();
  }

  private buildChart() {
    this.LineChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        // labels: [],
        datasets: [{
          // label: 'Number of Items Sold in Months',
          data: [20, 4, 5, 6],
          // fill: 200,
          // lineTension: 10,
          // steppedLine: false,
          backgroundColor: ['#2CCC70', '#5A51DE', '#F39B13', '#E94C3D'],
          // label: ['Phone', '002- asd', '003- asd', '004- asd']
          // borderColor: "red",
          // borderAlign: 'center',
          // borderCapStyle: 'round',
          // borderJoinStyle: 'miter'
        }]
      },
      options: {
        cutoutPercentage: 75,
        // circumference: 100,
        rotation: 50,
        animation: {
          animateRotate: true,
          animateScale: true
        },
        tooltips: {
          callbacks: {
            title: (item, data: any) => {
              data.labels[0] = 'Mail';
              data.labels[1] = 'Phone';
              data.labels[2] = 'Site';
              data.labels[3] = 'API';
              const info = data.labels[item[0].index];
              this.colorBc = data.datasets[0].backgroundColor[item[0].index];
              const dataset = data.datasets[0].data[item[0].index];
              const dataCalc = data.datasets[0]._meta[0].total;
              const calc = (dataset / dataCalc) * 100;
              const percent = Math.round(calc);
              const dataResult = `${info}  ${percent}%`;
              return dataResult;
            },
            label: () => null,
            // afterLabel: (item, data: any) => {
            //   this.colorBc = data.datasets[0].backgroundColor[item.index];
            //   // const dataset = data.datasets[0].data[item.index];
            //   // const dataCalc = data.datasets[0]._meta[0].total;
            //   // const calc = (dataset / dataCalc) * 100;
            //   // const percent = Math.round(calc);
            //   return ;
            // }
          },
          custom: (custom) => {
            custom.width = 100;
            custom.backgroundColor = `${this.colorBc}`;
            custom.bodyFontSize = 12;
            custom.bodyFontColor = '#FFF';
            custom._titleAlign = 'center';
            custom.borderColor = '#FFF';
            return custom;
          },
        }
      }
    });

  }





}
