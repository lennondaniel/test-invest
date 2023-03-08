import { Component } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = {
    username: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
