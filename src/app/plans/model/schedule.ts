export class Schedule {
  id: number;
  tep: string;
  grace_period: number;
  initial_balance: string;
  interest: string;
  quota: string;
  final_balance: string;
  constructor() {
        this.id = 0;
        this.tep = '';
        this.grace_period = 0;
        this.initial_balance = '';
        this.interest = '';
        this.quota = '';
        this.final_balance = '';
    }
}
