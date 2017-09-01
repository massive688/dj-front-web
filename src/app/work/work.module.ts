import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkComponent} from "./work.component";
import { IndexComponent } from './component/index/index.component';
import {RouterModule} from "@angular/router";
import {WORK_ROUTES} from "./work.route";
import { WorktopComponent } from './component/worktop/worktop.component';
import { WorksidebarComponent } from './component/worksidebar/worksidebar.component';
import { WorkContentTopComponent } from './component/work-content-top/work-content-top.component';
import { WorkBackTopComponent } from './component/work-back-top/work-back-top.component';
import { WorkMenuComponent } from './component/work-menu/work-menu.component';
import { WorkMenuItemComponent } from './component/work-menu/work-menu-item/work-menu-item.component';
import { WorkMsgCenterComponent } from './component/work-msg-center/work-msg-center.component';
import { WorkProfilePicturePipe } from './pipes/work-profile-picture/work-profile-picture.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WorkScrollPositionDirective } from './directives/work-scroll-position.directive';
import { WorkSlimScrollDirective } from './directives/work-slim-scroll.directive';
import {AppTranslationModule} from "../app.translation.module";
import {WorkMenuService} from "./services/work-menu/work-menu.service";
import { WorkErrorComponent } from './component/work-error/work-error.component';
import { WorkThemeRunDirective } from './directives/work-theme-run.directive';
import {WorkThemeConfigProviderService} from "app/work/services/work-theme/work-theme-config-provider.service";
import {WorkImgLoaderService} from "./services/work-img-loader/work-img-loader.service";
import {WorkThemeSpinnerService} from "./services/work-theme/work-theme-spinner.service";
import {WorkThemePreloaderService} from "./services/work-theme/work-theme-preloader.service";
import {WorkMsgCenterService} from "./services/work-msg-center/work-msg-center.service";
import {WorkThemeConfigService} from "./services/work-theme/work-theme-config.service";
import { PieChartComponent } from './component/content/pie-chart/pie-chart.component';
import { WorkCardComponent } from './component/content/work-card/work-card.component';
import { WorkCardBlurDirective } from './component/content/work-card/work-card-blur.directive';
import { SchoolDocumentComponent } from './component/content/school-document/school-document.component';
import { ContentCardComponent } from './component/content/content-card/content-card.component';
import { CustomerDocumentComponent } from './component/content/customer-document/customer-document.component';
import { WorkAppPicturePipe } from './pipes/work-app-picture.pipe';
import { CustomerDocumentItemComponent } from './component/content/customer-document/customer-document-item/customer-document-item.component';
import { InlineFormComponent } from './component/content/customer-document/customer-document-item/inline-form/inline-form.component';
import { BasicFormComponent } from './component/content/customer-document/customer-document-item/basic-form/basic-form.component';
import { HorizontalFormComponent } from './component/content/customer-document/customer-document-item/horizontal-form/horizontal-form.component';
import { WithoutLabelsFormComponent } from './component/content/customer-document/customer-document-item/without-labels-form/without-labels-form.component';
import { BlockFormComponent } from './component/content/customer-document/customer-document-item/block-form/block-form.component';
import { WorkCheckboxComponent } from './component/content/customer-document/customer-document-item/work-checkbox/work-checkbox.component';
import { WorkPagingComponent } from './component/content/work-paging/work-paging.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import { DefaultModalComponent } from './component/content/content-card/default-modal/default-modal.component';
import {NgbDropdownModule, NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ContentSonTabsComponent } from './component/content/customer-document/content-son-tabs/content-son-tabs.component';
import { ContentTableComponent } from './component/content/content-table/content-table.component';
import { SearchTableComponent } from './component/content/content-table/search-table/search-table.component';
import { HandonTableComponent } from './component/content/content-table/handon-table/handon-table.component';
import { TableWidthDirective } from './component/content/content-table/table-width.directive';
import { YaTableComponent } from './component/content/content-table/ya-table/ya-table.component';
import {PaginationModule} from 'ngx-bootstrap';
import { YaTableSortingDirective } from './component/content/content-table/ya-table/ya-table-sorting.directive';
import { InstrumentComponent } from './component/content/content-table/ya-table/instrument/instrument.component';
import {SuperTableModule} from "../libraries/super-table/super-table.module";
import { TabHrefPipe } from './pipes/tab-href.pipe';
import { ContentSonTabComponent } from './component/content/customer-document/content-son-tabs/content-son-tab/content-son-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    AppTranslationModule,
    SuperTableModule,
    NgbModule.forRoot(),
    RouterModule.forChild(WORK_ROUTES),
    PaginationModule.forRoot()
  ],
  declarations: [
    WorkComponent,
    IndexComponent,
    WorktopComponent,
    WorksidebarComponent,
    WorkContentTopComponent,
    WorkBackTopComponent,
    WorkMenuItemComponent,
    WorkMenuComponent,
    WorkMsgCenterComponent,
    WorkProfilePicturePipe,
    WorkScrollPositionDirective,
    WorkSlimScrollDirective,
    WorkErrorComponent,
    WorkThemeRunDirective,
    PieChartComponent,
    WorkCardComponent,
    WorkCardBlurDirective,
    SchoolDocumentComponent,
    ContentCardComponent,
    CustomerDocumentComponent,
    WorkAppPicturePipe,
    CustomerDocumentItemComponent,
    InlineFormComponent,
    BasicFormComponent,
    HorizontalFormComponent,
    WithoutLabelsFormComponent,
    BlockFormComponent,
    WorkCheckboxComponent,
    WorkPagingComponent,
    DefaultModalComponent,
    ContentSonTabsComponent,
    ContentTableComponent,
    SearchTableComponent,
    HandonTableComponent,
    TableWidthDirective,
    YaTableComponent,
    YaTableSortingDirective,
    InstrumentComponent,
    TabHrefPipe,
    ContentSonTabComponent
  ],
  providers: [
    WorkMenuService,
    WorkThemeConfigProviderService,
    WorkImgLoaderService,
    WorkThemeSpinnerService,
    WorkThemePreloaderService,
    WorkMsgCenterService,
    WorkThemeConfigService
  ],
  entryComponents: [
    DefaultModalComponent,
    InstrumentComponent,
    ContentSonTabComponent
  ]
})
export class WorkModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: WorkModule,
      providers: [
        WorkMenuService
      ],
    };
  }
}
