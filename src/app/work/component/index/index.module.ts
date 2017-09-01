import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {INDEX_ROUTES} from "./index.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INDEX_ROUTES)
  ],
  declarations: [
  ]
})
export class IndexModule { }
