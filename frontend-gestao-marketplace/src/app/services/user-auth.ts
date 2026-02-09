import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthLoginResponse } from '../interfaces/auth-login-response';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

  private readonly TOKEN_KEY = 'token';
  private readonly API_URL= 'http://localhost:3000/api/users';

  router = inject(Router);

  constructor(private http: HttpClient) {}


  login(email: string, password: string) {
    return this.http
      .post<AuthLoginResponse>(`${this.API_URL}/login`, { email, password })
      .pipe(tap(response => {
          localStorage.setItem(this.TOKEN_KEY, response.data.token);
        })
      );
  }


  getUserToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  
  logout(){
    console.log('Logout');
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
