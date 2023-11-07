import { Component, Input } from '@angular/core';
import { Period } from '../../model/period';

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent {
  @Input() schedule: Period[] = [];
  displayedColumns: string[] = ['periodIndex', 'tep', 'gracePeriodType', 'openBalance', 'interest', 'quote', 'endBalance'];

  constructor() {}
}
