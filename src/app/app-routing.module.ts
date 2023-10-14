import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditVehicleComponent} from "./credit/pages/credit-vehicle/credit-vehicle.component";

const routes: Routes = [
  {path: 'credit-vehicle' , component: CreditVehicleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
