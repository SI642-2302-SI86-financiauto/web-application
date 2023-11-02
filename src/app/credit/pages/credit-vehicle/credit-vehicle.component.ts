import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credit} from "../../model/credit";
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-credit-vehicle',
  templateUrl: './credit-vehicle.component.html',
  styleUrls: ['./credit-vehicle.component.css']
})
export class CreditVehicleComponent {
  username: string = '';


  credit : Credit =  new Credit(
    0,
    1,
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
    private router: Router
  ) {
  }

  onSubmit() {

  }

  creditForm: FormGroup = this.formBuilder.group({
    sellingPrice: ['', {validators: [Validators.required], updatedOn: 'change'}],
    initQuotePercentage: ['', {validators: [Validators.required]}],
    endQuotePercent: ['', {validators: [Validators.required], updatedOn: 'change'}],
    numGracePeriods: ['', {validators: [Validators.required], updatedOn: 'change'}],
    numYears: ['', {validators: [Validators.required], updatedOn: 'change'}],
    rateType: ['', {validators: [Validators.required], updatedOn: 'change'}],
    rateValue: ['', {validators: [Validators.required], updatedOn: 'change'}],
    frequencyPayment: ['', {validators: [Validators.required], updatedOn: 'change'}],
    gracePeriod: ['', {validators: [Validators.required], updatedOn: 'change'}],
    moneyType: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })





}
