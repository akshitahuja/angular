import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  checkSession(params) {
  	return this.http.get('http://localhost:4200/student-backend/auth.php');
  }

  validateUser(form) {
    // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:4200/student-backend/login.php?fn=validate_user', form);
  }
}
