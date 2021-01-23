import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {

   // Top Achievement Pie Chart Start
 
   public topAchievementPieChartType: string = 'pie';
   public topAchievementPieLabels: string[] = ['Registered','Active','Deactive'];
   public topAchievementPieDataSets: any[] = [
     {
       fill: true,
       backgroundColor: ['#5758bb', '#12cbc4', '#ffc312', '#a3cb38', '#9980fa'],
       borderColor: 'rgba(179,181,198,1)',
       pointBorderColor: '#fff',
       pointBackgroundColor: 'rgba(179,181,198,1)',
       data: [50,60,70,50,46],
     },
   ];
  
   public barChartPlugins = [pluginDataLabels];
  
   public topAchievementPieOptions: any = {
     responsive: true,
     tooltips: {
       enabled: false,
     },
     title: { display: true },
     legend: {
       display: true,
       position: 'bottom',
       labels: { usePointStyle: true, boxWidth: 6, fontSize: 14 },
     },
     plugins: {
       datalabels: {
         color: '#660033',
         display: true,
         labels: {
           title: {
             font: { weight: 'bold' },
           },
         },
       },
     },
     maintainAspectRatio: true,
   };
  
   //Top Achievement Pie Chart End
  
  constructor() { }

  ngOnInit(): void {
  }

}
