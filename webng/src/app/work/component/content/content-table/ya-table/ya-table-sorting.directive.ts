import {Directive, HostListener, Input} from '@angular/core';
import {ColumnState} from "./ya-table-interface";

@Directive({
  selector: '[yaTableSorting]'
})
export class YaTableSortingDirective {

  public constructor() { }

  @Input('yaTableSorting')
  public column: ColumnState;

  @HostListener('click', ['$event'])
  public onToggleSort(event:any):void {
    if (event) {
      event.preventDefault();
    }
  }

  @HostListener('mousedown', ['$event'])
  public onDisableMouseDown(event:any):void {
    if (event) {
      event.preventDefault();
    }
  }
}
