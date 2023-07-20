import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { VoituresComponent } from "./Components/voitures/voitures.component";

const routes: Routes = [
//  {path:'', redirectTo:'', pathMatch:'full'},
 {path:'voitures', component:VoituresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppRoutingModule{}
