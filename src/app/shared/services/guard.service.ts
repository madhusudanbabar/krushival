import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(): boolean {
    if (!this.af.checkLoginStatus()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  constructor(public af: AuthService, public router: Router) { }
}
