export interface Credit {
  id: number;
  userId: number;
  numYears: number;
  sellingPrice: number;
  initQuotePercentage: number;
  rateType: string,
  rateValue: number;
  endQuotePercent: number;
  paymentFrecuency: string;
  gracePeriodType: string;
  numGracePeriods: number;
}


export class Credit {
  constructor(
    public id: number,
    public userId: number,
    public numYears: number,
    public sellingPrice: number,
    public initQuotePercentage: number,
    public rateType: string,
    public rateValue: number,
    public endQuotePercent: number,
    public paymentFrecuency: string,
    public gracePeriodType: string,
    public numGracePeriods: number,

  ) {

  }
}
