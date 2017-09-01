import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit {

  value:Object = {};
  constructor() { }

  ngOnInit() {
  }
  cleanUp(): void {
    for(var name in this.value){
      this.value[name] = '';
    }
  }
}
