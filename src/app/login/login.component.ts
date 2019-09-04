import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authenticate.validateUser(form).subscribe(res => {
      if(res['success']) {
      	this.router.navigate(['/dashboard']);
      }
    });
  }
}
