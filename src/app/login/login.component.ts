import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public user = [];

  constructor(private authenticate: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    // this.authenticate.validateUser(form).subscribe(res => this.user = res);
    this.authenticate.validateUser(form).subscribe(res => {
      console.log(res);
      console.log(res['username']);
      // this.username = res.username;
    });
  }
}
