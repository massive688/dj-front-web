import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.scss']
})
export class HorizontalFormComponent implements OnInit {

  isRemember: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
