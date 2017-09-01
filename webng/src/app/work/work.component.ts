import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {WorkMenuService} from "./services/work-menu/work-menu.service";
import {Routes} from "@angular/router";
import {PAGES_MENU} from "./work.menu";
import {GlobalState} from "../global.state";
import {WorkImgLoaderService} from "./services/work-img-loader/work-img-loader.service";
import {WorkThemeSpinnerService} from "./services/work-theme/work-theme-spinner.service";
import {WorkThemePreloaderService} from "./services/work-theme/work-theme-preloader.service";
import {WorkThemeConfigService} from "./services/work-theme/work-theme-config.service";

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  isMenuCollapsed: boolean = false;

  constructor(private _menuService: WorkMenuService,
              private _state: GlobalState,
              private _imageLoader: WorkImgLoaderService,
              private _spinner: WorkThemeSpinnerService,
              private viewContainerRef: ViewContainerRef,
              private _themeConfig: WorkThemeConfigService) {

    this._themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }


  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    WorkThemePreloaderService.load().then((values) => {
      this._spinner.hide();
    });
  }
  private _loadImages(): void {
    // register some loaders
    WorkThemePreloaderService.registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
  }
}
