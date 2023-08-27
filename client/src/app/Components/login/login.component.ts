import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../Services/user.service'
import { NotifService } from 'src/app/Services/notif.service';




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
    private notifService : NotifService,
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
          this.notifService.show('info', 'Bienvenu');

          await this.router.navigate(['/voitures']);

        },
        error: (err) => {
          this.notifService.show('error', 'Mot de passe ou email ne sont pas correctes');
          console.error('An error occurred', err)

        }
      });


  }


}
