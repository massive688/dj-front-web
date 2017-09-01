import { Injectable } from '@angular/core';
import {GlobalState} from "../../../../global.state";

@Injectable()
export class CustomerDocumentService {

  pageNow:number = 0;

  pageSize:number = 10;

  pageCount:number = 1;

  rowCount:number = 100;
  constructor(private state:GlobalState) {

  }
  getData():any{
    return [{
      id:'83NS00009000001',
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503033691598&di=71eb4ef4771a84aee75528abac597024&imgtype=0&src=http%3A%2F%2Fwptavern.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fbootstrap.png',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },{
      id:'83NS00009000023',
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    }];
  }

  num:number = 0;
  getActions():any{
    return [
      {
        type: "Add",
        title: "operation.add",
        clickFunction: ()=>{
          this.state.notifyDataChanged('button.AddEvent', ++this.num);
        },
        disable: true
      },
      {
        type: "edit",
        title: "operation.edit",
        clickFunction: ()=>{
          this.state.notifyDataChanged('button.EditEvent',++this.num);
        },
        disable: true
      },
      {
        type: "del",
        title: "operation.del",
        clickFunction: ()=>{
          this.state.notifyDataChanged('button.DelEvent',++this.num);
        },
        disable: true
      },
      {
        type: "refresh",
        title: "operation.refresh",
        clickFunction: ()=>{
          this.state.notifyDataChanged('button.RefreshEvent',++this.num);
        },
        disable: true
      }
    ]
  }
}
