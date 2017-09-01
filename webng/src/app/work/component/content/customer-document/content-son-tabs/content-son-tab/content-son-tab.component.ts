import {Component, Input, OnInit} from '@angular/core';
import {ITabObject} from "../../../content-table/ya-table/ya-table-interface";

@Component({
  selector: 'content-son-tab',
  templateUrl: './content-son-tab.component.html',
  styleUrls: ['./content-son-tab.component.scss']
})
export class ContentSonTabComponent implements OnInit {

  @Input() tabCode:ITabObject;
  tabRows:Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
