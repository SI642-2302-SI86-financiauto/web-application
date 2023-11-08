export class Schedule {
  periodIndex: number;
  tep: number;
  gracePeriodType: string;
  openBalance: number;
  interest: number;
  quote: number;
  amortization: number;
  endBalance: number;
  constructor() {
        this.periodIndex = 0;
        this.tep = 0;
        this.gracePeriodType = '';
        this.openBalance = 0;
        this.interest = 0;
        this.quote = 0;
        this.amortization = 0;
        this.endBalance = 0;
    }
}
