import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  nombre: string="";
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    })
  }

  ngOnInit() {
  }

}
