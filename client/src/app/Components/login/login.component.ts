import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../Services/user.service'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() { }

  onSubmit() {

    const user = {
      email: this.email,
      password: this.password
    };
    console.log(user);

    this.userService.loginUser(user)
      .subscribe({
        next: async (data) => {
          console.log('from backend', data); //ajout d'une notification
          await this.router.navigate(['/voitures']);

        },
        error: (err) => console.error('An error occurred', err)
      });


  }


}
