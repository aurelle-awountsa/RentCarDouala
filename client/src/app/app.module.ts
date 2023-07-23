import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoituresComponent } from './Components/voitures/voitures.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RentedComponent } from './Components/users/rented/rented.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { SignupComponent } from './Components/signup/signup.component';
import { NavComponent } from './Components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    LoginComponent,
    RentedComponent,
    SignupComponent,
    NavComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
