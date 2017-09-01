import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {GlobalState} from "../../../global.state";
import {layoutSizes} from "../../work.constants";

@Component({
  selector: 'work-sidebar',
  templateUrl: './worksidebar.component.html',
  styleUrls: ['./worksidebar.component.css','./worksidebar.scss']
})
export class WorksidebarComponent implements OnInit {

  public menuHeight:number;
  public isMenuCollapsed:boolean = false;
  public menuItems: any[];


  constructor(private _elementRef:ElementRef, private _state:GlobalState ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }


  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }
  private _shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }


  /**
   * window:resize part
   * @type {boolean}
   */

  public isMenuShouldCollapsed:boolean = false;

  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  /**
   * View After
   */
  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }
}
