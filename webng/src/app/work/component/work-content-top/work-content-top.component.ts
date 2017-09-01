import { Component, OnInit } from '@angular/core';
import {GlobalState} from "../../../global.state";

@Component({
  selector: 'work-content-top',
  templateUrl: './work-content-top.component.html',
  styleUrls: ['./work-content-top.component.css','./work-content-top.component.scss']
})
export class WorkContentTopComponent implements OnInit {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
  ngOnInit() {
  }

}
