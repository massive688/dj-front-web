import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {ColumnState} from "../super-table-interfaces";

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-resizer]',
  templateUrl: './super-table-resizer.component.html',
  styleUrls: ['./super-table-resizer.component.scss']
})
export class SuperTableResizer implements OnInit {

  private static MAX_CLICK_WAIT = 250;
  private static MIN_COLUMN_WIDTH = 30;

  @Input() column: ColumnState;
  @Input() actualWidth: number;

  constructor (private el: ElementRef) { }

  ngOnInit() {
  }

  @HostBinding('attr.title')
  get title(): string {
    return 'Click-and-drag to resize. Click to clear specified width.';
  }

  @HostListener('mousedown', ['$event'])
  grab(grabEvt: MouseEvent): void {
    grabEvt.preventDefault();
    const mousedownTime: number = Date.now();
    const initClientX: number = grabEvt.clientX;
    const initWidth: number = this.column.width || this.getActualParentWidth();
    const drag: EventListener = (event: MouseEvent) => {
      const change: number = event.clientX - initClientX;
      this.column.width = Math.max(initWidth + change, SuperTableResizer.MIN_COLUMN_WIDTH);
    };
    const unbindDrag: EventListener = () => {
      window.removeEventListener('mousemove', drag);
      window.removeEventListener('mouseup', unbindDrag);
      if (Date.now() - mousedownTime < SuperTableResizer.MAX_CLICK_WAIT) {
        this.column.width = null;
      }
    };
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', unbindDrag);
  }

  @HostListener('click', ['$event'])
  stopClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private getActualParentWidth(): number {
    return this.el.nativeElement.parentElement.offsetWidth;
  }
}
