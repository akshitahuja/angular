import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';
  username = 'admin';
  password = '';

  constructor(private authenticate: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authenticate.validateUser(form).subscribe(res => {
      if(res['success']) {
        localStorage.setItem('is_logged_in', 'true');
        localStorage.setItem('user_id', res['extraData']['user_id']);
        localStorage.setItem('username', res['extraData']['username']);
      	this.router.navigate(['/dashboard']);
      }
      else {
        this.errorMsg = res['msg'];
        this.password = '';
      }
    });
  }
}
