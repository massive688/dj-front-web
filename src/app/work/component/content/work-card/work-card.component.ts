import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input() cardTitle:String;
  @Input() workCardClass:String;
  @Input() cardType:String;
  constructor() { }

  ngOnInit() {
  }

}
