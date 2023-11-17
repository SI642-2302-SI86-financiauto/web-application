import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credit} from "../../model/credit";
import {ActivatedRoute, Router} from "@angular/router";
import {CreditService} from "../../services/credit.service";




@Component({
  selector: 'app-credit-vehicle',
  templateUrl: './credit-vehicle.component.html',
  styleUrls: ['./credit-vehicle.component.css']
})

export class CreditVehicleComponent {
  username: string = '';
  credits: Credit[]=[];
  myCredits: Credit[]=[];

  credit : Credit =  new Credit(
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    0,
    '',
    '',
    0,

  );
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private creditService: CreditService
  ) {
  }

  onSubmit() {
    const userIdString = localStorage.getItem('userId');
    if (userIdString !== null) {
      const userId = parseInt(userIdString, 10);
      this.credit.numYears = parseInt(this.creditForm.value.numYears, 10);


      this.credit.userId = userId;
      this.creditService.createCredit(this.credit).subscribe(
        (createdCredit) => {console.log(this.credit);
          console.log('Crédito creado con éxito:', createdCredit);
          this.creditService.getAll().subscribe((response: any) =>{
              this.credits = response;

              this.myCredits = this.credits.filter(credit => credit.userId === userId);

              if (this.myCredits.length > 0) {
                  // Utiliza pop() para obtener y removerel último elemento del arreglo
                  const ultimoCreditoId = this.myCredits.pop()?.id;
                  console.log('Último crédito:', ultimoCreditoId);
                  this.router.navigate([`/plans/${ultimoCreditoId}`]);
              } else {
                  console.log('No se encontraron créditos para el usuario.');
              }
          })
        },
        (error) => {
          console.error('Error al crear el crédito:', error);
        }
      );
    } else {
      console.error('No se encontró userId en localStorage.');
    }
  }

  creditForm: FormGroup = this.formBuilder.group({
    numYears: ['', {validators: [Validators.required], updatedOn: 'change'}],
    sellingPrice: ['', { validators: [Validators.required, this.validatePositiveNumber], updatedOn: 'change' }],
    initQuotePercent: ['', { validators: [Validators.required, this.validatePositiveNumber], updatedOn: 'change' }],
    rateType: ['', {validators: [Validators.required], updatedOn: 'change'}],
    rateValue: ['', { validators: [Validators.required, this.validatePositiveNumber], updatedOn: 'change' }],
    endQuotePercent: ['', { validators: [Validators.required, this.validatePositiveNumber], updatedOn: 'change' }],
    frequencyPayment: ['', {validators: [Validators.required], updatedOn: 'change'}],
    gracePeriod: ['', { validators: [Validators.required], updatedOn: 'change' }],
    numGracePeriods: ['', { validators: [Validators.required,], updatedOn: 'change' }],
    moneyType: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })



    validatePositiveNumber(control: AbstractControl) {
        const value = control.value;

        if (value <= 0) {
            return { notPositive: true };
        }

        return null;
    }

    

}
