import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './security/pages/login/login.component';
import { RegisterComponent } from './security/pages/register/register.component';
import { CreditVehicleComponent } from './credit/pages/credit-vehicle/credit-vehicle.component';
import { ScheduleComponent } from './plans/pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CreditVehicleComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
