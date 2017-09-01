import {Component, Input, OnInit} from '@angular/core';
import {ColumnState, ISuperTableFilter} from "../super-table-interfaces";
import { debounce } from 'lodash';
import {SuperTableState} from "../super-table-state.service";

@Component({
  selector: '[super-table-text-filter]',
  templateUrl: './super-table-text-filter.component.html',
  styleUrls: ['./super-table-text-filter.component.scss']
})
export class SuperTableTextFilterComponent implements OnInit {

  @Input() filter: ISuperTableFilter;
  @Input() column: ColumnState;

  onModelChange: Function = debounce(function() {
  }, 200);

  public clearFilter(): void {
    this.column.filterValue = '';
    this.state.notify();
  }

  constructor(private state: SuperTableState) {}

  ngOnInit() {
  }

}
