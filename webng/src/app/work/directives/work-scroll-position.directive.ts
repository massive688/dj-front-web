import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[workScrollPosition]'
})
export class WorkScrollPositionDirective {

  @Input() public maxHeight:number;
  @Output() public scrollChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  private _isScrolled:boolean;
  constructor() { }

  public ngOnInit():void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll():void {
    let isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}
