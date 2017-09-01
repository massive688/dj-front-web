import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {GlobalState} from "../../../global.state";
import {Router, NavigationEnd} from "@angular/router";
import {WorkMenuService} from "../../services/work-menu/work-menu.service";

@Component({
  selector: 'work-menu',
  templateUrl: './work-menu.component.html',
  styleUrls: ['./work-menu.component.css','./work-menu.scss'],
})
export class WorkMenuComponent implements OnInit {

  @Input() menuHeight: number;
  @Input() sidebarCollapsed: boolean = false;
  @Output() expandMenu = new EventEmitter<any>();

  public outOfArea: number = -200;

  public showHoverElem: boolean;
  public hoverElemTop: number;
  public hoverElemHeight: number;

  protected _onRouteChange: Subscription;
  protected _menuItemsSub: Subscription;
  public menuItems: any[];

  constructor(private _router: Router, private _service: WorkMenuService, private _state: GlobalState) { }


  public updateMenu(newMenuItems) {
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

  ngOnInit() {
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });
    this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
  }

  public ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
    this._menuItemsSub.unsubscribe();
  }
  public hoverItem($event): void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    let menuTop = $event.currentTarget.getBoundingClientRect().top;
    this.hoverElemTop = menuTop - 66;
  }

  public toggleSubMenu($event): boolean {
    let submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
