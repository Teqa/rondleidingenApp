import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  
  canActivate(): boolean {
    this.router.navigate(['/tab-nav/login']);
    return false;
//    return this.auth.userState.loggedin;
  }
}
