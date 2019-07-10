import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }

  login(credentials){
    return this.http.post('/api/authenticate',
          JSON.stringify(credentials))
          .pipe(
            map(response => {
              if(response && response['token']){
                localStorage.setItem('token',response['token']);
                return true;
              }
              return false;
            })
          );
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  isLoggedIn(){

    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token)
      return false;

    let isExpired = jwtHelper.isTokenExpired(token);

    return isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token) return null;
    
    return new JwtHelperService().decodeToken(token);
  }
}
