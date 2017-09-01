import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[super-table-dummy-rows]',
  templateUrl: './super-table-dummy-rows.component.html',
  styleUrls: ['./super-table-dummy-rows.component.scss']
})
export class SuperTableDummyRowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() rowHeight: number;
  @Input() rowCount: number;
  @Input() columnCount: number;

  BG_IMAGE_DATA: string = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAlCAYAAACDKIOp',
    'AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiuH',
    'v37n+G////MzAxAMHQIQACDAC7twbaN2nkgwAAAABJRU5ErkJggg=='
  ].join('');

  rowStyleHeight(): string {
    const height = this.rowHeight * this.rowCount;
    return `${height}px`;
  }

  backgroundSize(): string {
    return `auto ${this.rowHeight}px`;
  }

}
