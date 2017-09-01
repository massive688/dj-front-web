import {Component, ElementRef, HostBinding, Input, OnInit, HostListener} from '@angular/core';
import {ColumnState} from "../super-table-interfaces";
import {SuperTableState} from "../super-table-state.service";

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-header]',
  templateUrl: './super-table-header.component.html',
  styleUrls: ['./super-table-header.component.scss']
})
export class SuperTableHeader implements OnInit {

  @Input() column: ColumnState;
  @Input() noHeight = false;

  SORT_TITLE = 'Click to change sort order. Shift-click to sort on multiple columns.';

  constructor(private el: ElementRef, private state: SuperTableState) { }

  ngOnInit() {
  }

  getValue(): string {
    return this.column.def.label;
  }

  @HostBinding('style.width')
  get width(): string {
    return (typeof this.column.width === 'number') ? this.column.width + 'px' : '150px';
  }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    event.preventDefault();
    if (this.column.hasSort) {
      this.state.toggleSort(this.column, event.shiftKey);
    }
  }
}
