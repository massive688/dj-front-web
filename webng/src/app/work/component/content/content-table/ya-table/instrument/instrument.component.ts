import { Component, OnInit, AfterViewInit } from '@angular/core';
import {SuperTableCellComponent} from "../../../../../../libraries/super-table/super-table-cell/super-table-cell.component";

@Component({
  selector: 'app-instrument-cell',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent extends SuperTableCellComponent {

  value: any;
}
