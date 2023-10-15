import {Component, Input} from '@angular/core';
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent {
  @Input() schedule: Schedule[] = [];
  displayedColumns: string[] = ['id', 'tep', 'grace_period', 'initial_balance', 'interest', 'quota', 'final_balance'];
  constructor() {
  }
}
