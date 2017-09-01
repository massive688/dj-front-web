import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public words: string = '';
  constructor() { }

  ngOnInit() {
  }

  public submitSearch(){
    if(this.words){
      console.log(this.words);
    }
  }

}
