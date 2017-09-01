import {Routes} from "@angular/router/router";
import {IndexComponent} from "./index/index.component";
import {SearchComponent} from "./search/search.component";
import {FrontComponent} from "./front.component";

export const FRONT_ROUTES: Routes = [
  {
    path:'index',
    component: FrontComponent,
    children:[
      {
        path:'',
        component: IndexComponent,
      },

      {
        path:'search',
        component: SearchComponent,
      },
      {
        path:'**',
        redirectTo:'/error'
      }
    ]
  },

]
