import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../../Services/inscription.service'
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  lastName:string = "";
  firstName: string = "";
  email: string = "";
  password: string ="";

  constructor(
    private router: Router,
    private inscrption : InscriptionService,
  ){}

  ngOnInit() {}

  onSubmit(signupform: NgForm){

    const user = {
      lastname: this.lastName,
      firstname: this.firstName,
      email: this.email,
      password: this.password
     };

    this.inscrption.inscriptionUser(JSON.stringify(user))
     .toPromise()
     .then(() =>{
        this.router.navigate(['/connexion']).then(nav =>{
          console.log(nav);
        }, err => {
            console.log(err)

        });

    })
    
  }

}
