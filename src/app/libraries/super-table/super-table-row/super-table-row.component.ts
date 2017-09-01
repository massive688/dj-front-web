import {Component, Input, OnInit} from '@angular/core';
import {SuperTableState} from "../super-table-state.service";

@Component({
  selector: '[super-table-row]',
  templateUrl: './super-table-row.component.html',
  styleUrls: ['./super-table-row.component.scss']
})
export class SuperTableRowComponent implements OnInit {

  @Input() row: any;

  constructor(public state: SuperTableState) { }

  ngOnInit() {
  }

}
