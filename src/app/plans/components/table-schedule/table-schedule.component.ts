import {Component, Input} from '@angular/core';
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent {
  @Input() schedule: Schedule[] = [];
  displayedColumns: string[] = ['periodIndex', 'tep', 'gracePeriodType', 'openBalance', 'interest', 'quote','amortization', 'endBalance'];
  constructor() {
  }
}
