import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service'
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  lastName: string = "";
  firstName: string = "";
  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() { }

  onSubmit() {

    const user = {
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      password: this.password
    };

    console.log(user);

    this.userService.registerUser(user)
      .subscribe({
        next: (data) => {
          console.log('from backend', data); //ajout d'une notification
        },
        error: (err) => console.error('An error occurred', err)
      });

  }

}
