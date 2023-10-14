import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './security/pages/login/login.component';
import { RegisterComponent } from './security/pages/register/register.component';
import { CreditVehicleComponent } from './credit/pages/credit-vehicle/credit-vehicle.component';
import { ScheduleComponent } from './plans/pages/schedule/schedule.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CreditVehicleComponent,
    ScheduleComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
