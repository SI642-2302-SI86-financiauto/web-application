import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreditService} from "../../../credit/services/credit.service";
import {take} from "rxjs";
import {Credit} from "../../../credit/model/credit";
import {Schedule} from "../../model/schedule";
import { Finance } from 'financejs';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{

  mySchedule$: Schedule[]=[];
    username: string = '';
    credits: Credit[]=[];
    credit: Credit[]=[];
    myCredits: Credit[]=[];
    coki : number= 0;
    van : number =0;
    tir : number =0;

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
      const userIdString = localStorage.getItem('userId') || '';
  const userId = parseInt(userIdString, 10);

  console.log("userid: ", userId);
  this.route.params.pipe(take(1)).subscribe((params) => {
    const id = params['id'];


    this.creditService.getScheduleByCreditId(id).subscribe((scheduleData: any) => {
      this.mySchedule$ = scheduleData;
      console.log(scheduleData);
      console.log("id de credito: ", id);
      
      const ob = this.mySchedule$[0].openBalance;

      this.creditService.getAll().subscribe((response: any) =>{
        this.credits = response;

        this.myCredits = this.credits.filter(credit => credit.id==id && credit.userId === userId);
        console.log(this.myCredits)

        if (this.myCredits.length > 0) {
          const credit = this.myCredits[0]; // Suponemos que solo hay un crédito con esa combinación
      
          // Calcular la tasa descontada del periodo según la frecuencia
          const cok = 0.5; // 50% como ejemplo, reemplaza con tu tasa real
          
      
          switch (this.myCredits[0].paymentFrecuency) {
            case 'FORTNIGHTLY':
              const discountRate1 = Math.pow(1 + cok, 15 / 360) - 1;
              this.coki=discountRate1;
              break;
            case 'MONTHLY':
              const discountRate2 = Math.pow(1 + cok, 30 / 360) - 1;
              this.coki=discountRate2;
              break;
            case 'QUARTERLY':
              const discountRate3 = Math.pow(1 + cok, 90 / 360) - 1;
              this.coki=discountRate3;
              break;
            case 'SEMIANNUALLY':
              const discountRate4 = Math.pow(1 + cok, 180 / 360) - 1;
              this.coki=discountRate4;
              break;
            case 'ANNUALLY':
              const discountRate5 = Math.pow(1 + cok, 360 / 360) - 1;
              this.coki=discountRate5;
              break;
            default:
              console.error('Frecuencia no reconocida');
              break;
          }
      
          console.log('Tasa descontada del periodo:', this.coki);
        } else {
          console.error('No se encontró un crédito con la combinación especificada');
        }




      })

      const cashflows = scheduleData.map((scheduleItem: any) => {
        // Aquí asumo que cada elemento de dataSchedule tiene un campo 'flujo'
        // Ajusta esto según la estructura real de tus datos
        return scheduleItem.quote;
        
      });

      console.log(cashflows)
      const roundedCashflows = cashflows.map((flow : any) => parseFloat(flow.toFixed(2)));
      console.log(roundedCashflows)

      const negatedCashflows = roundedCashflows.map((flow : any)  => -flow);
      console.log(negatedCashflows)
    
      const finance = new Finance();
      // Calcular el VAN
      this.tir = finance.IRR(-ob,...roundedCashflows);
      this.van = finance.NPV(this.coki,-ob,...roundedCashflows); // 0.1 es la tasa de descuento, ajusta según tus necesidades
    
      // Calcular la TIR
     // const tir = finance.IRR(ob,cashflows);


    
      console.log('VAN:', this.van);
      console.log('TIR', this.tir)
      //console.log('TIR:', tir);

    });
  });
    }
}