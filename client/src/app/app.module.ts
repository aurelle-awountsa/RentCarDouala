import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoituresComponent } from './Components/voitures/voitures.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RentedComponent } from './Components/users/rented/rented.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { SignupComponent } from './Components/signup/signup.component';
import { NavComponent } from './Components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';


import { TagModule } from 'primeng/tag';
import {BadgeModule} from 'primeng/badge';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DataViewModule} from 'primeng/dataview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PickListModule} from 'primeng/picklist';
import {RatingModule} from 'primeng/rating';
import {DialogService} from 'primeng/dynamicdialog';




@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    LoginComponent,
    RentedComponent,
    SignupComponent,
    NavComponent,
    HomepageComponent,
    AddCarComponent,

  ],
  imports: [
    BrowserModule,
    SplitButtonModule,
    MessagesModule,
    DividerModule,
    RatingModule,
    MessageModule,
    TabViewModule,
    TableModule,
    InputTextModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    RippleModule,
    ToolbarModule,
    TooltipModule,
    DropdownModule,
    TagModule,
    BadgeModule,
    CardModule,
    DataViewModule,

  ],

  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
