import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/models/login-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {

  mailInUse = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => {
        sessionStorage.setItem('registerdUser', "true");
        this.router.navigate(['/login']);
      }).catch((e) => {
        if(e.message.includes('(auth/email-already-in-use)')) this.mailInUse = true;
      });
  }
}