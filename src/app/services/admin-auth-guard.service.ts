import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.admin) return true;

    this.route.navigate(['/no-access']);
    return false;
  }
}
