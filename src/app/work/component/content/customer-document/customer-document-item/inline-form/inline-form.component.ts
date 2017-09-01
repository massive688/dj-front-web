import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.scss']
})
export class InlineFormComponent implements OnInit {

  isRemember: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
