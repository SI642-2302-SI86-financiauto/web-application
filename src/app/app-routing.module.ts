import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './public/pages/homepage/homepage.component'
import {CreditVehicleComponent} from './credit/pages/credit-vehicle/credit-vehicle.component'
import {ScheduleComponent} from "./plans/pages/schedule/schedule.component";
import {AccountComponent} from "./profile/pages/account/account.component";
import {RegisterComponent} from "./security/pages/register/register.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import { ListScheduleComponentComponent } from './ListSchedule/list-schedule-component/list-schedule-component.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'account', component: AccountComponent},
  {path: 'credit', component: CreditVehicleComponent},
  {path: 'plans/:id', component: ScheduleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list-schedule', component: ListScheduleComponentComponent},
  // {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
