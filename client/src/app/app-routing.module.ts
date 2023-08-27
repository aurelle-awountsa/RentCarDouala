import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { VoituresComponent } from "./Components/voitures/voitures.component";
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AddCarComponent } from './Components/add-car/add-car.component';

const routes: Routes = [
  {path:'accueil', component:VoituresComponent},
  {path:'voitures', component:VoituresComponent},
  {path:'inscription', component:SignupComponent},
  {path:'connexion', component: LoginComponent},
  {path:'ajoutVoiture', component: AddCarComponent},
  {path:'', redirectTo : "/accueil", pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule{}
