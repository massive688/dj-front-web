import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ColumnState} from "../super-table-interfaces";
import {SuperTableState} from "../super-table-state.service";
import { forEach } from 'lodash';

@Component({
  selector: 'super-table-enum-filter-dropdown',
  templateUrl: './super-table-enum-filter-dropdown.component.html',
  styleUrls: ['./super-table-enum-filter-dropdown.component.scss']
})
export class SuperTableEnumFilterDropdownComponent implements OnInit, OnDestroy {

  @Input() column: ColumnState;
  top: number;
  left: number;
  width: number;
  destroyMe: Function;

  constructor(
    private state: SuperTableState,
    private el: ElementRef
  ) {}

  ngOnInit (): void {
    const styles: CSSStyleDeclaration = this.el.nativeElement.style;
    styles.top = this.top + 'px';
    styles.left = this.left + 'px';
    styles.width = this.width + 'px';
  }

  ngOnDestroy (): void {
    // to ensure that references to parent component
    // do not prevent GC
    this.destroyMe = null;
  }

  onChoiceChange(): void {
    this.state.notify();
  }

  showAll(): void {
    forEach(this.column.filterValue, (val, key) => {
      this.column.filterValue[key] = true;
    });
    this.state.notify();
    this.destroyMe();
  }

}
