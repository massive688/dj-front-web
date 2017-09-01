import { Component, OnInit } from '@angular/core';
import {CustomerDocumentService} from "./customer-document.service";
import {Router} from "@angular/router";
import {LocalDataSource} from "ng2-smart-table";
import {TableData} from "./tableData";
import {ITabObject} from "../content-table/ya-table/ya-table-interface";


@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.scss'],
  providers: [CustomerDocumentService]
})
export class CustomerDocumentComponent implements OnInit {
  tabCodes:Array<ITabObject> = [
    {id:'1001A0000231',code:'home',name:'教程',active:true},
    {id:'1001A0000232',code:'ios',name:'苹果',active:false},
    {id:'1001A0000233',code:'meter',name:'仪表',active:false},
    {id:'1001A0000234',code:'ejb',name:'中间件',active:false}];






  fieldEdit:boolean = false;
  searchTitle:string = '条件查询';
  operationActions:Array<Object>;
  public customers: Array<Object> = new Array<Object>();
  constructor(private _customersv:CustomerDocumentService) {
    this.getData().then((data) => {
      this.source.load(data);
    });
  }
  needRouterNavigate:boolean = true;
  ngOnInit() {
    this.customers = this._customersv.getData();
    this.operationActions = this._customersv.getActions();

  }


  /**
   * 双击触发事件
   */
  changeEdit(): void{
    this.fieldEdit = !this.fieldEdit;
  }
  /**
   * 失去焦点触发事件
   */
  blurEdit(): void{
    this.fieldEdit = !this.fieldEdit;
  }



  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

  query: string = '';

  source: LocalDataSource = new LocalDataSource();


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(TableData);
      }, 2000);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
