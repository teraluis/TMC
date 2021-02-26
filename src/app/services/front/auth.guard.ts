import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {InfoServiceService} from './info-service.service';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private infoService: InfoServiceService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: string = localStorage.getItem('token');
    const returnUrl = state.url;
    if (token === null) {
      this.router.navigate(['login'], {queryParams: {returnUrl}});
      return false;
    } else {
      const expiration = +localStorage.getItem('expiration');
      const now: number = Date.now();
      if (now > expiration) {
        localStorage.clear();
        this.infoService.displayError('Votre token a expiré. Veuillez vous reconnecter.');
        this.router.navigate(['login'], {queryParams: {returnUrl}});
        return false;
      } else {
        return true;
      }
    }
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }
}
