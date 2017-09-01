import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FRONT_ROUTES} from "./front.route";
import {HeaderComponent} from "./header/header.component";
import {IndexComponent} from "./index/index.component";
import {SearchComponent} from "./search/search.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FrontComponent} from "./front.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FRONT_ROUTES)
  ],

  declarations: [
    FrontComponent,
    HeaderComponent,
    IndexComponent,
    SearchComponent
  ],
  exports:      [
  ],
  schemas:[],
  providers:    []
})
export class FrontModule { }
