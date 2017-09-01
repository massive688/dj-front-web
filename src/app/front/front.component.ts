import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InOutService} from "../service/InOutService";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
  providers:[]
})
export class FrontComponent implements OnInit {

  constructor(private router:Router, private server: InOutService) { }

  ngOnInit() {
    console.log("asdasda");
  }
  public isIndex():boolean{
    // return this.router.url === "/" || this.router.url === "/index"
    return this.server.head2Top;
  }
  public isFixed():boolean {
    return this.server.head2Top;//((this.header.isIndex() && this.header.headtoTop)||(!this.header.isIndex()))
  }
}
