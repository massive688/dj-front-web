import { Routes } from "@angular/router";
import {CompubComponent} from "./compub.component";



export const COMMON_ROUTES: Routes = [
  {
    path:'',
    redirectTo: 'index',
    pathMatch:'full',
  },
  {
    path:'index',
    component: CompubComponent,
    children:[]
  },
  {
    path:'**',
    redirectTo: '/error',
  }
];
