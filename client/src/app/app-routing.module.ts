import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { VoituresComponent } from "./Components/voitures/voitures.component";
import { SignupComponent } from './Components/signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'voitures', component:VoituresComponent},
  {path:'inscription', component:SignupComponent},
  {path:'connexion', component: LoginComponent},
  {path:'', redirectTo : "/home", pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule{}
