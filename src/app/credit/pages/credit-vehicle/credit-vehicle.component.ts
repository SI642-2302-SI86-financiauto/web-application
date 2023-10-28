import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";



@Component({
  selector: 'app-credit-vehicle',
  templateUrl: './credit-vehicle.component.html',
  styleUrls: ['./credit-vehicle.component.css']
})
export class CreditVehicleComponent {
  username: string = '';
  vehicle_value: number = 0;
  initial_fee: number = 0;
  final_fee: number = 0;
  rate_value: number = 0;
  time_payment: number = 0;



  login(): void {}
  feeFormControl = new FormControl('', [Validators.required]);
  vehicleFormControl = new FormControl('', [Validators.required]);
  finalFeeFormControl = new FormControl('', [Validators.required]);



}
