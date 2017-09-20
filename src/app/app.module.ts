import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';
import { HttpClient } from './service/httpClient';
import { StatusService } from './service/status.service';
import { RegistrationService } from "./service/registration.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { MyStatusComponent } from './tab/my-status/my-status.component';
import { DailyStatusComponent } from './tab/daily-status/daily-status.component';
import { ArchiveComponent } from './tab/archive/archive.component';
import { routing } from './app.routing';
import { DetailsComponent } from './tab/details/details.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyStatusComponent,
    DailyStatusComponent,
    ArchiveComponent,
    DetailsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard, AuthenticationService , StatusService , HttpClient , RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
