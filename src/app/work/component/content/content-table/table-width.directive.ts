import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[tableWidth]'
})
export class TableWidthDirective {

  @Input() thWidth:Object;
  constructor(private element:ElementRef) { }


  ngOnChanges(changes) {
    console.log(this.element.nativeElement.style.width);
  }

}
