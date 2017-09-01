import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';


@Component({
  selector: 'work-back-top',
  templateUrl: './work-back-top.component.html',
  styleUrls: ['./work-back-top.component.css','./work-back-top.scss']
})
export class WorkBackTopComponent implements OnInit {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('workBackTop') _selector:ElementRef

  constructor() { }

  ngOnInit() {
  }
  @HostListener('click')
  _onClick():boolean {
    jQuery('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
