import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  router;
  auth;
  constructor(router: Router) {
    this.auth = localStorage.getItem("auth");
  }

  logout() {
    localStorage.removeItem("auth");
    this.router.navigate('/')
  }

}
