import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
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
}
