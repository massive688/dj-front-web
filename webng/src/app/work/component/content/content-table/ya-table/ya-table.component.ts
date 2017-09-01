import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";
import {
  ColumnState,  ISuperTableColumn,
  ISuperTableOptions
} from "./ya-table-interface";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {InstrumentComponent} from "./instrument/instrument.component";
import {superTableSorters} from "../../../../../libraries/super-table/super-table-sorters";

const INSTRUMENTS: string[] = [
  'sax',
  'trumpet',
  'trombone',
  'piano',
  'keys',
  'drums'
];

@Component({
  selector: 'ya-table',
  templateUrl: './ya-table.component.html',
  styleUrls: ['./ya-table.component.scss'],
  providers: []
})
export class YaTableComponent implements OnChanges, OnDestroy, OnInit {
  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  private subscription : Subscription;
  private fullTextFilterValueChanged: Subject<string> = new Subject<string>();

  rows: MyRow[] = [];
  columns: ISuperTableColumn[] = [
    {
      id: 'firstName',
      key: 'firstName',
      label: 'First',
      width: 100,
      sort: superTableSorters.STRING
    },
    {
      id: 'listA',
      key: 'listA',
      label: 'listA',
      sort: superTableSorters.STRING
    },
    {
      id: 'listB',
      key: 'listB',
      label: 'listB',
      sort: superTableSorters.STRING
    },
    {
      id: 'listC',
      key: 'listC',
      label: 'listC',
      sort: superTableSorters.STRING
    },
    {
      id: 'lastName',
      key: 'lastName',
      label: 'Last',
      sort: superTableSorters.STRING
    },
    {
      id: 'instrument',
      key: 'instrument',
      label: 'Instrument',
      sort: superTableSorters.STRING,
      component: InstrumentComponent,
      filterChoices: INSTRUMENTS
    },
    {
      id: 'height',
      key: 'height',
      label: 'Height',
      sort: superTableSorters.NUMBER,
      format: function(value: any, row: Object, colState: ColumnState): string {
        const numValue: number = value as number;
        const feet: number = Math.floor(numValue / 12);
        const inches: number = numValue % 12;
        return `${feet}'${inches}"`;
      }
    },
    {
      id: 'dob',
      key: 'dob',
      label: 'Birthday',
      sort: superTableSorters.NUMBER
    }
  ];
  options: ISuperTableOptions = {
    autoHeight: true // auto size the table to the parent element
  };
  /*public constructor(private sanitizer:DomSanitizer, private state: YaTableService) {
    t/!*his.fullTextFilterValueChanged
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(filterValue => this.onChangeTable());*!/
  }*/

  ngOnInit() {
    this.rows = this.generateRows(100);
  }
  tableClasses: string[] = ['table', 'table-bordered'];
  private instruments: string[] = INSTRUMENTS;
  private generateRows (count: number): MyRow[] {
    const result: MyRow[] = [];
    for (let i = 0; i < count; i++) {
      result.push({
        id: i,
        firstName: this.chooseRandom(this.firstNames),
        lastName: this.chooseRandom(this.lastNames),
        height: Math.floor(Math.random() * 30) + 60,
        dob: new Date(Date.now() - (Math.random() * 30 + 15) * 365 * 24 * 60 * 60 * 1000),
        instrument: this.chooseRandom(this.instruments)
      });
    }
    return result;
  }
  private chooseRandom (choices: string[]): string {
    const randomIndex: number = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  private lastNames: string[] = [
    'Davis',
    'Monk',
    'Gordon',
    'Coltrane',
    'Henderson',
    'Rollins'
  ];

  private firstNames: string[] = [
    'Miles',
    'Thelonious',
    'Dexter',
    'John',
    'Joe',
    'Sonny'
  ];

  public sanitize(html:string):SafeHtml {
   // return this.sanitizer.bypassSecurityTrustHtml(html);
    return null;
  }
}
export interface MyRow {
  id:number;
  firstName: string;
  lastName: string;
  height: number;
  dob: Date;
  instrument: string;
}
