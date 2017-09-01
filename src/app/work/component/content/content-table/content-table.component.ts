import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  ColumnState,
  ISuperTableOptions, ISuperTableColumn,
} from "app/work/component/content/content-table/ya-table/ya-table-interface";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import {Subject} from "rxjs/Subject";
import {InstrumentComponent} from "./ya-table/instrument/instrument.component";
import {GlobalState} from "../../../../global.state";

@Component({
  selector: 'content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {
  @Input() tableRows:Array<Object>;
  @Input() isNeedRouterNavigate:boolean;

 /* options:ITableOptions;*/
  thWidth:Object;
  /*columns:Array<ITableColumn>;*/





  constructor(private route:Router, private _element:ElementRef, private _globalState: GlobalState) {


  }

  ngOnInit() {
    this.firstWidth = 150 + 'px';

    if(this.isNeedRouterNavigate){
      this._globalState.subscribe('table.rowDblclickSelected',(row)=>{
        this.rowClick(null, row);
      })
    }
  }

  tableHeight:number = 456;


  index:number = 24;
  rowClick($event, $item):void{
    console.log($item);
    console.log();
    if(this.isNeedRouterNavigate)
      this.route.navigate([this.route.url + '-item',$item.id]);
    // this.tableRows.push({
    //   id:'83NS000090000'+(this.index++),
    //   image: 'app/browsers/chrome.svg',
    //   browser: 'Google Chrome',
    //   visits: '10,392',
    //   isVisitsUp: true,
    //   purchases: '4,214',
    //   isPurchasesUp: true,
    //   percent: '45%',
    //   isPercentUp: true
    // })
  }

  public ngAfterViewChecked():void {
    // var theadElement = jQuery(jQuery(".table-hover > thead")[0]);
    // var ths = theadElement.children("tr").children("th");
    // var header = jQuery(".table-hover-header.fixed-table");
    // var headThs = jQuery(header[0]).find("thead > tr > th");
    // let index = 0;
    // for(index; index < ths.length; index++){
    //   headThs[index].style.width = ths[index].style.width;
    // }
    //this.thWidth = this._element.nativeElement.querySelector('.black-muted-bg-body').style.width;
  }

  firstWidth:string;

}



