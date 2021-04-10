import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { MainService } from 'src/app/services/main.service';
import { forkJoin } from 'rxjs';
import {Testing} from 'src/app/classes/testing';
import { AccountDetails } from 'src/app/classes/account-details';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  AllCustomers;

  public first: Testing[];
  public second:AccountDetails[];

  total: number = 0;
  total1:number=0;
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

  public topAchievementPieDataSets1: any[] = [
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
  public demoPIE2:any[]=[];

  constructor(private _service:MainService,private spinner: NgxSpinnerService) {}

  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    
    this.getDetails();
    this.getAccountDetails();
   
  }

  getDetails()
  {
    const AllData= this._service.getCustomerFromRemote();
    forkJoin([AllData]).subscribe((data)=>{
      this.first=data[0];

      console.log(this.first);


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



  getAccountDetails()
  {
    const AllData= this._service.getAccountDetails();
    forkJoin([AllData]).subscribe((data)=>{
      this.second=data[0];

      console.log(this.second);

      this.pending=0;
      this.approved=0;
      this.rejected=0;
      this.total1=0;

      for(var i in this.second)
      {
        if(this.second[i].accountregstatus===1)
        {
          this.pending++;
        }
        else if(this.second[i].accountregstatus===2)
        {
          this.approved++;
        }
        else if(this.second[i].accountregstatus===3)
        {
          this.rejected++;
        }
      }

      this.total1=this.pending+this.approved+this.rejected;

      console.log("Total : " +this.total1 )
      console.log("Pending :" +this.pending)
      console.log("Approved :" +this.approved);
      console.log("Rejected: "+this.rejected)

        this.demoPIE2[0]=this.pending;
        this.topAchievementPieDataSets1[0].data=[];
        this.topAchievementPieDataSets1[0].data=[...this.demoPIE2];

        this.demoPIE2[1]=this.approved;
        this.topAchievementPieDataSets1[0].data=[];
        this.topAchievementPieDataSets1[0].data=[...this.demoPIE2];


        this.demoPIE2[2]=this.rejected;
        this.topAchievementPieDataSets1[0].data=[];
        this.topAchievementPieDataSets1[0].data=[...this.demoPIE2];
    })
  }
}
