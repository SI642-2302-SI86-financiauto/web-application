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
import { AccountComponent } from './profile/pages/account/account.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import { TableScheduleComponent } from './plans/components/table-schedule/table-schedule.component';
import {MatRadioButton, MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {NgFor} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './security/components/form/form.component';
import { ListScheduleComponentComponent } from './ListSchedule/list-schedule-component/list-schedule-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CreditVehicleComponent,
    ScheduleComponent,
    HeaderComponent,
    MenuComponent,
    AccountComponent,
    PageNotFoundComponent,
    TableScheduleComponent,
    ListScheduleComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    NgFor,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
