import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Credit } from 'src/app/credit/model/credit';
import { CreditService } from 'src/app/credit/services/credit.service';

@Component({
  selector: 'app-list-schedule-component',
  templateUrl: './list-schedule-component.component.html',
  styleUrls: ['./list-schedule-component.component.css']
})
export class ListScheduleComponentComponent implements OnInit {
  userCredits: Credit[] = [];

  userName: String = '';

  displayedColumns: string[] = ['id', 'username', 'actions'];

  constructor(private router: Router, private creditService: CreditService) { }

  ngOnInit(): void {
    const userIdString = localStorage.getItem('userId');
    this.userName=localStorage.getItem('firstName') ||'';
    if (userIdString !== null) {
      const userId = parseInt(userIdString, 10);
      this.loadUserCredits(userId);
    } else {
      console.error('No se encontró userId en localStorage.');
    }
  }

  loadUserCredits(userId: number): void {
    this.creditService.getAll().subscribe((response: any) => {
      const credits: Credit[] = response;
      this.userCredits = credits.filter((credit) => credit.userId === userId);
    });
  }

  viewCreditDetails(creditId: number): void {
    this.router.navigate([`/plans/${creditId}`]);
  }
}


