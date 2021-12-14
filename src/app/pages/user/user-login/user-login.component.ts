import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private _serviceAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this._serviceAuth.login().then(() => {
      this._serviceAuth.getTokenSpotify();
      this.router.navigate(['home'])
    })
  }

  register() {
    this._serviceAuth.register();
  }

}
