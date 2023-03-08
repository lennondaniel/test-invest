import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

interface LoginResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})


export class AccountService {

  constructor(private http: HttpClient) { }

   async login(user: any) {
    const response = await this.http.post<LoginResponse>(`${environment.api}/api/login`, user).toPromise()
    if (response && response.token) {
      window.localStorage.setItem('token', response.token);
      return true
    }
      return false;
  }
}
