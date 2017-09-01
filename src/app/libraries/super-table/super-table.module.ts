import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTableComponent } from './super-table.component';
import { SuperTableCellComponent } from './super-table-cell/super-table-cell.component';
import { SuperTableHeadComponent } from './super-table-head/super-table-head.component';
import { SuperTableBodyComponent } from './super-table-body/super-table-body.component';
import {SuperTableHeader} from './super-table-header/super-table-header.component';
import {SuperTableResizer} from './super-table-resizer/super-table-resizer.component';
import { SuperTableEnumFilterComponent } from './super-table-enum-filter/super-table-enum-filter.component';
import { SuperTableTextFilterComponent } from './super-table-text-filter/super-table-text-filter.component';
import { SuperTableEnumFilterDropdownComponent } from './super-table-enum-filter-dropdown/super-table-enum-filter-dropdown.component';
import { SuperTableDummyRowsComponent } from './super-table-dummy-rows/super-table-dummy-rows.component';
import { SuperTableRowComponent } from './super-table-row/super-table-row.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SuperTableComponent,
    SuperTableCellComponent,
    SuperTableHeadComponent,
    SuperTableBodyComponent,
    SuperTableHeader,
    SuperTableResizer,
    SuperTableEnumFilterComponent,
    SuperTableTextFilterComponent,
    SuperTableEnumFilterDropdownComponent,
    SuperTableDummyRowsComponent,
    SuperTableRowComponent,
    TableCellComponent
  ],
  exports: [
    SuperTableComponent,
    SuperTableCellComponent
  ],
  entryComponents: [
    SuperTableEnumFilterDropdownComponent
  ]
})
export class SuperTableModule { }
