import {Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISuperTableOptions} from "../super-table-interfaces";

import {SuperTableState} from "../super-table-state.service";

import { debounce } from 'lodash';
import {GlobalState} from "../../../global.state";

const DEFAULT_ROW_HEIGHT = 20;
const PADDING_ROW_COUNT = 20;
const DEBOUNCE_DELAY = 250;

@Component({
  selector: 'super-table-body',
  templateUrl: './super-table-body.component.html',
  styleUrls: ['./super-table-body.component.scss']
})
export class SuperTableBodyComponent implements OnInit, OnChanges {


  @Input() rows: Array<any>;
  @Input() tableClasses: any;
  @Input() bodyHeight: number;
  @Input() options: ISuperTableOptions;

  visibleRows: Array<any> = [];

  // assume small row height at first.
  // The real height will be detected once rows are rendered.
  rowHeight: number = DEFAULT_ROW_HEIGHT;
  rowOffset = 0;

  private scrollHandler = debounce(() => {
    this.updateVisibleRows();
  }, DEBOUNCE_DELAY);

  private resizeHandler = debounce(() => {
    this.detectRowHeight();
    this.updateVisibleRows();
  });

  constructor (private el: ElementRef, public state: SuperTableState, private globalState:GlobalState) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateVisibleRows();
  }

  @HostListener('scroll')
  trackScroll() {
    this.scrollHandler();

    /* 更新头的scrollLeft */
    this.updateHeadScrollLeft();
  }

  @HostListener('resize')
  onWindowResize() {
    this.resizeHandler();
  }

  private updateVisibleRows(): void {
    let startIndex: number, endIndex: number;
    const currentScroll: number = this.el.nativeElement.scrollTop;

    startIndex = Math.floor(currentScroll / this.rowHeight - PADDING_ROW_COUNT);
    startIndex = Math.max(0, startIndex);
    this.rowOffset = startIndex;

    endIndex = Math.ceil((currentScroll + this.bodyHeight) / this.rowHeight + PADDING_ROW_COUNT);
    endIndex = Math.min(this.rows.length - 1, endIndex);
    this.visibleRows = this.rows.slice(startIndex, endIndex);
    setTimeout( () => {
      this.detectRowHeight();
    });
  }

  private detectRowHeight(): void {
    const tr: HTMLTableSectionElement = this.el.nativeElement.querySelector('tbody.visible-rows tr');
    if (tr != null) {
      this.rowHeight = tr.offsetHeight;
    }
  }

  private updateHeadScrollLeft(){
    const head: HTMLTableSectionElement = this.el.nativeElement.previousElementSibling;
    if(head){
      head.scrollLeft = this.el.nativeElement.scrollLeft;
    }
  }


  activeRow(currentTarget:Element, row:any) {
    let tbody = currentTarget.parentNode;
    jQuery(tbody).children('tr').removeClass('active');
    currentTarget.classList.add('active');
    this.globalState.notifyDataChanged('table.rowChangeSelected',row);
    // this.globalState.notifyDataChanged('table.rowMultiChangeSelected',row);
  }

  dblclickRow(row:any){
    this.globalState.notifyDataChanged('table.rowDblclickSelected',row);
  }
}
