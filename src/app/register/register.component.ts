import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class Register {
  router;
  route;
  http;
  data;
  message;
  constructor(router: Router, route: ActivatedRoute, http: Http) {
    var that = this;
    that.data = {
        email: '',
        password: '',
        superUser: true,
        department: 'MIS'
    }
    that.router = router;
    that.route = route;
    that.http = http;
  }

  ngOnInit() {
    var that = this;
  }

  register() {

    if(this.data.email !== "" && this.data.password !== ""){
      this.message = "";
      this.http.post('http://localhost:3000/users/new', this.data).subscribe(data => {
          console.log(data);
      });
      this.data = {};
    }
    else {
      this.message = "Fill all the fields";
    }
  }

}
