import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
	console.log(form);
  	localStorage.removeItem('token');
  	//localStorage.setItem('token', 1234)
  	//this.router.navigate(['/dashboard']);
  }
}
