import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoituresComponent } from './Components/voitures/voitures.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/users/login/login.component';
import { RentedComponent } from './Components/users/rented/rented.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { SignupComponent } from './Components/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    LoginComponent,
    RentedComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,


  ],
  exports:[AppRoutingModule,
  BrowserModule,
  CommonModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
