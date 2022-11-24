import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

//Rutas
import { APPROUTINGMODULE } from './app.routes';

//Servicios
import { HttpClientModule } from "@angular/common/http";


//Componentes
import { AppComponent } from './app.component';
import { GatewaysComponent } from './components/addgateways/addgateways.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CookieService } from 'ngx-cookie-service';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { GatewayslitsComponent } from './components/gatewayslits/gatewayslits.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewaysComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    GatewayslitsComponent
  ],
  imports: [
    BrowserModule,
    APPROUTINGMODULE,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CookieService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
