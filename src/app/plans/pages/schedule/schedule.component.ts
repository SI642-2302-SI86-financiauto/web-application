import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreditService} from "../../../credit/services/credit.service";
import {take} from "rxjs";
import {Credit} from "../../../credit/model/credit";
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{

    mySchedule$: Schedule[]=[];
  schedule: any[] = [
    {
      id: 1,
      tep: 0.01,
      grace_period: 0,
      initial_balance: 10000,
      interest: 0.01,
      quota: 1000,
      final_balance: 9000

    },
    {
      id: 2,
      tep: 0.01,
      grace_period: 0,
      initial_balance: 9000,
      interest: 0.01,
      quota: 1000,
      final_balance: 8000
    },
    ];
    constructor(private route: ActivatedRoute, private navigator:Router, private creditService: CreditService) {

    }
  ngOnInit(): void {

      this.route.params.pipe( take(1)).subscribe((params) => {
          const id = params['id'];

          this.creditService.getScheduleByCreditId(id).subscribe((response:any)=>{
            this.mySchedule$ = response;
          })

      });
  }

}
