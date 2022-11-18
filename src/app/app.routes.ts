import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewaysComponent } from './components/addgateways/addgateways.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authenication/login/login.component';
import { RegisterComponent } from './components/authenication/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addgateways', component: GatewaysComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class APPROUTINGMODULE { }
