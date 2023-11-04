import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [ReactiveFormsModule, HttpClientModule],
  standalone: true


})
export class FormComponent {
  constructor(private registerService: RegisterService){

  }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    password: new FormControl('')


  })
  submitApplication() {

    const user = new Object({
      firstName: this.applyForm.value.firstName ?? '',
      lastName:this.applyForm.value.lastName ?? '',
      email:this.applyForm.value.email ?? '',
      password: this.applyForm.value.password ?? '',
      dateOfBirth:this.applyForm.value.dateOfBirth ?? ''
    })
    this.registerService.register(user).subscribe(data=>{
      console.log(data.status, data.body)
    });











  }
}




