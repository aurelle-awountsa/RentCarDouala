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

  onSubmit(){

    const user = {
      lastname: this.lastName,
      firstname: this.firstName,
      email: this.email,
      password: this.password
    };
    console.log(user);

  }

}
