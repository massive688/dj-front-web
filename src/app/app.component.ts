import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InOutService} from "./service/InOutService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InOutService]
})
export class AppComponent implements OnInit{


  hrefLink : string ;

  title = 'webApp';

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.hrefLink = 'yue';
  }


}
