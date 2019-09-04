import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private router: Router) { }

  checkSession(params) {
  	this.http.get('http://localhost:4200/student-backend/auth.php').subscribe(res => {
      if(res['success'] == true) {
        localStorage.setItem('is_logged_in', 'true');
      }
      else {
        localStorage.setItem('is_logged_in', 'false');
        this.router.navigate(['login']);
      }
    });
  }

  validateUser(form) {
    // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:4200/student-backend/login.php?fn=validate_user', form);
  }
}
