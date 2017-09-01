import { Directive, ElementRef, Input } from '@angular/core';
//import * as jQuery from 'jquery';

@Directive({
  selector: '[workSlimScroll]'
})
export class WorkSlimScrollDirective {

  @Input() public workSlimScrollOptions:Object;

  constructor(private _elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.workSlimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }

}
