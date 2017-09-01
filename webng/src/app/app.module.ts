import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { YueComponent } from './yue/yue.component';
import { appRoutes } from './app.route';
import {FormsModule} from "@angular/forms";
import {InOutService} from "./service/InOutService";
import {UserLoginService} from "./service/user/user-login.service";
import {FrontModule} from "./front/front.module";
import {CompubModule} from "./compub/compub.module";
import {WorkModule} from "./work/work.module";
import {AdminModule} from "./admin/admin.module";
import {GlobalState} from "./global.state";
import {AppTranslationModule} from "./app.translation.module";
import {HttpModule} from "@angular/http";
import {AppState} from "app/app.service";


@NgModule({
  declarations: [
    AppComponent,
    YueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppTranslationModule,
    FrontModule,
    CompubModule,
    WorkModule,
    AdminModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [InOutService,UserLoginService,GlobalState,AppState],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule {

  constructor(public appState: AppState){}
}
