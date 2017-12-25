import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  auth;
  router;
  constructor(router: Router) {
    var that = this; 
    that.router = router;
    that.auth = localStorage.getItem("auth");
    if(that.auth == null) {
      that.router.navigate(['blah']);
    }
  }
  
  ngOnInit() {
    
  }

}
