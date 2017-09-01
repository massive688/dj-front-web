import {Routes} from "@angular/router/router";
import {IndexComponent} from "./component/index/index.component";
import {WorkComponent} from "./work.component";
import {WorkErrorComponent} from "./component/work-error/work-error.component";
import {SchoolDocumentComponent} from "./component/content/school-document/school-document.component";
import {CustomerDocumentComponent} from "./component/content/customer-document/customer-document.component";
import {CustomerDocumentItemComponent} from "./component/content/customer-document/customer-document-item/customer-document-item.component";

export const WORK_ROUTES: Routes = [

  {
    path:'work',
    component: WorkComponent,
    children:[
      {
        path:'',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path:'index',
        component:IndexComponent
      },
      {
        path:'schools',
        children:[
          {
            path:'school-document',
            component:SchoolDocumentComponent
          }
        ]
      },
      {
        path:'customers',
        children:[
          {
            path:'customer-document',
            component:CustomerDocumentComponent
          },
          {
            path:'customer-document-item/:id',
            component:CustomerDocumentItemComponent
          }
        ]
      },
      {
        path:'00',
        component:WorkErrorComponent
      }
    ]
  },

]
