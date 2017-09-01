import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-document-item',
  templateUrl: './customer-document-item.component.html',
  styleUrls: ['./customer-document-item.component.scss']
})
export class CustomerDocumentItemComponent implements OnInit {
  id: any;

  constructor(private aqrouter: ActivatedRoute) { }

  param:any;
  ngOnInit() {
    this.param = this.aqrouter.params['value'];
    this.id = this.param.id;
    console.log(this.id);
  }

}
