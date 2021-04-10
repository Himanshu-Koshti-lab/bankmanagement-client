import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { MainService } from 'src/app/services/main.service';
import { forkJoin } from 'rxjs';
import {Testing} from 'src/app/classes/testing';
import { AccountDetails } from 'src/app/classes/account-details';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminCustomerCustomerDetails } from 'src/app/model/admin-customer-customer-details';

@Component({
  selector: 'app-employee-registration-dashboard',
  templateUrl: './employee-registration-dashboard.component.html',
  styleUrls: ['./employee-registration-dashboard.component.css']
})
export class EmployeeRegistrationDashboardComponent implements OnInit {


  public first: AdminCustomerCustomerDetails[];
 
  total: number = 0;
  approved: number = 0;
  pending: number = 0;
  rejected: number = 0;

  public topAchievementPieChartType: string = 'pie';
  public topAchievementPieLabels: string[] = ['Pending','Approved','Rejected'];

  public topAchievementPieDataSets: any[] = [
    {
      fill: true,
      backgroundColor: ['#5758bb', '#12cbc4', '#ffc312'],
      borderColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      data: [],
    },
  ];


  public barChartPlugins = [pluginDataLabels];

  public topAchievementPieOptions: any = {
    responsive: true,
    tooltips: {
      enabled: true,
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

  public demoPIE1:any[]=[];
  

  constructor(private _service:MainService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    
    this.getDetails();
    
  }

  getDetails()
  {
    const AllData= this._service.getEmployeeFromRemote();
    forkJoin([AllData]).subscribe((data)=>{
      this.first=data[0];


      for(var i in this.first)
      {
        if(this.first[i].registrationStatus===1)
        {
          this.pending++;
        }
        else if(this.first[i].registrationStatus===2)
        {
          this.approved++;
        }
        else if(this.first[i].registrationStatus===3)
        {
          this.rejected++;
        }
      }

      this.total=this.pending+this.approved+this.rejected;

        this.demoPIE1[0]=this.pending;
        this.topAchievementPieDataSets[0].data=[];
        this.topAchievementPieDataSets[0].data=[...this.demoPIE1];

        this.demoPIE1[1]=this.approved;
        this.topAchievementPieDataSets[0].data=[];
        this.topAchievementPieDataSets[0].data=[...this.demoPIE1];


        this.demoPIE1[2]=this.rejected;
        this.topAchievementPieDataSets[0].data=[];
        this.topAchievementPieDataSets[0].data=[...this.demoPIE1];
    })
  }


}
