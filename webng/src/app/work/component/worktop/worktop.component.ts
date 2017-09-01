import { Component, OnInit } from '@angular/core';
import {GlobalState} from "../../../global.state";

@Component({
  selector: 'work-top',
  templateUrl: './worktop.component.html',
  styleUrls: ['./worktop.component.css','./worktop.scss']
})

export class WorktopComponent implements OnInit {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  public searchValue: string;

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {

  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public startSearch() {
    console.log(this.searchValue);
  }


}
