import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  is_logged_in;

  constructor(private authenticate: AuthenticateService, private route: Router) { }

  canActivate():boolean {
    this.is_logged_in = localStorage.getItem('is_logged_in');
    if(this.is_logged_in == 'true') {
      return true;
    }
    else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
