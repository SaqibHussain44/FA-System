import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})

export class Landing {
  router;
  route;

  constructor(router: Router, route: ActivatedRoute,) {
    var that = this;
    that.router = router;
    that.route = route;
  }

  ngOnInit() {
    var that = this;
  }

}
