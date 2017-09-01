import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Output } from '@angular/core';
import {InOutService} from "../../service/InOutService";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers:[]
})
export class IndexComponent implements OnInit{
  greeting = 'angular';

  items : any = new Array<number>();

  @Output()
  public ssy: boolean;

  constructor(public server: InOutService) {
    for(var i=0; i<100;i++)
      this.items.push(i)
  }

  ngOnInit() {
    this.greeting = 'index  df rtrtrn angular2';
  }

  public send(){
    console.log(this.ssy);
    this.server.isWork = this.ssy;
  }

  public goOut(){
    console.log(this.server.isWork)
  }

  public isScrollTop():boolean{
    return this.server.head2Top;//(this.header.isIndex() && this.header.headtoTop)||(!this.header.isIndex());
  }

}
