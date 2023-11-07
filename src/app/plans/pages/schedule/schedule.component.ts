import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from "../../../credit/services/credit.service";
import { take } from "rxjs";
import { Credit } from "../../../credit/model/credit";
import { Period } from '../../model/period';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  credits: Credit[] = [];
  myCredits: Credit[] = [];
  schedule: Period[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private creditService: CreditService) {}

  ngOnInit(): void {
    const userIdString = localStorage.getItem('userId');
    if (userIdString !== null) {
      const userId = Number(userIdString);
      this.creditService.getAll().pipe(take(1)).subscribe((response: any) => {
        this.credits = response;
        this.credits.forEach((credit) => {
          if (credit.userId === userId) {
            this.myCredits.push(credit);
          }
        });
        const creditId = this.myCredits[this.myCredits.length - 1].id;
        this.creditService.getPaymentSchedule(creditId).pipe(take(1)).subscribe((response: any) => {
          this.schedule = response;
          console.log('Datos de schedule:', this.schedule); // Agrega esta línea
        });
      });
    }
  }
}