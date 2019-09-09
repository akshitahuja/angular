import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name;

  constructor(private router: Router, private authenticate: AuthenticateService) { }

  ngOnInit() {
    this.name = localStorage.getItem('username');
  }

  logoutApp() {
  	this.authenticate.logoutApp().subscribe(res => {
  		localStorage.removeItem('is_logged_in');
	  	localStorage.removeItem('user_id');
	  	localStorage.removeItem('username');
	  	this.router.navigate(['/login']);
  	});
  }

}
