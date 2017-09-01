import { Component, OnInit, Input } from '@angular/core';
import {InOutService} from "../../service/InOutService";
import {UserLoginService} from "../../service/user/user-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  public isHide: boolean = false;

  public headtoTop: boolean = false;


  constructor(private router: Router, public server: InOutService, public loginService:UserLoginService) { }

  ngOnInit() {
    // console.log(this.isHide);
    // console.log(this.server.isWork);
    this.isHide = this.server.isWork;
    this.initWindowScrollEvent();
    this.router.events
      .subscribe((event) => {
        this.calcHeadHeight();
    });
  }

  navigationToIndex (){

  }

  scrolled(event:any){
    console.log(event);
    if(!event){
      return;
    }
  }

  isIndex(){
    return (this.router.url === "/" || this.router.url === "/index");
  }

  initWindowScrollEvent(){
    // if(this.isIndex()){
      //监听事件这样添加才有效果
      window.addEventListener('scroll',() => {
        this.calcHeadHeight();
      });
      this.calcHeadHeight();
    // }
  }
  calcHeadHeight(){
    let marginTop = document.body.scrollTop|| document.documentElement.scrollTop;
    this.headtoTop = marginTop > 500 && this.isIndex();
    this.server.head2Top = this.headtoTop || !this.isIndex();
  }

  navToLogin():void{
    this.router.navigate(['login']);
  }
  showHoverElem:boolean;
  hoverElemWidth:number;
  hoverElemLeft:number;
  public onClickItem($event): void {
    this.showHoverElem = true;
    this.hoverElemWidth = $event.currentTarget.clientWidth;
    // TODO: get rid of magic 66 constant
    let menuLeft:number = $event.currentTarget.getBoundingClientRect().left;

    this.hoverElemLeft = menuLeft;
  }
}
