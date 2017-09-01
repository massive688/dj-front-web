import {Component, Input, OnInit} from '@angular/core';
import {SuperTableState} from "../super-table-state.service";

@Component({
  selector: 'super-table-head',
  templateUrl: './super-table-head.component.html',
  styleUrls: ['./super-table-head.component.scss']
})
export class SuperTableHeadComponent implements OnInit {

  @Input() tableClasses: any;

  constructor(public state: SuperTableState) {}

  ngOnInit() {
  }

}
