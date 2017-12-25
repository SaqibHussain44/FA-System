import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
  router;
  route;
  http;
  data;
  message;
  constructor(router: Router, route: ActivatedRoute, http: Http, private auth: AuthService) {
    var that = this;
    that.data = {
      email: '',
      password: ''
    }
    that.router = router;
    that.route = route;
    that.http = http;
    that.message = ""
  }
 
  ngOnInit(): void {
  }

  login() {
    if(this.data.email !== "" && this.data.password !== ""){

      this.http.get('http://localhost:3000/users/getOne', {
          params: this.data
      }).map(res => res.json()).subscribe(users => {
          console.log(users)
          if(users.length > 0) {
              localStorage.setItem('auth', this.data.email);
              this.data = {};
              window.location.reload();
              this.router.navigate(['dashboard']);
          }
          else {
            this.message = "Credential are not correct"
              // user not found
          }
      });
    }
    else {
      this.message = "Fill all the fields"
    }
  }

}
