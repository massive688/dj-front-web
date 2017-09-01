import { Routes } from "@angular/router";
import { YueComponent } from './yue/yue.component';
import {FrontComponent} from "./front/front.component";
import {WorkComponent} from "./work/work.component";
import {AdminComponent} from "./admin/admin.component";
import {CompubComponent} from "./compub/compub.component";
import {IndexComponent} from "./front/index/index.component";



export const appRoutes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/index',
  },
  {
    path:'index',
    loadChildren: 'app/front/front.module#FrontModule'
  },
  {
    path:'work',
    loadChildren: 'app/work/work.module#WorkModule'
  },
  {
    path:'comm',
    loadChildren: 'app/compub/compub.module#CompubModule'
  },
  {
    path:'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path:'error',
    component:YueComponent
  },
  {
    path:'1122',
    redirectTo:'/error'
  }


];
