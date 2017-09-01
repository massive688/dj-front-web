import {Component, Input, OnInit} from '@angular/core';
import {ColumnState} from "../super-table-interfaces";

@Component({
  selector: 'super-table-cell',
  templateUrl: './super-table-cell.component.html',
  styleUrls: ['./super-table-cell.component.scss']
})
export class SuperTableCellComponent implements OnInit {

  @Input() row: Object;
  @Input() column: ColumnState;
  @Input() key: string;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}

