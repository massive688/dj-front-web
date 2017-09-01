import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'work-menu-item',
  templateUrl: './work-menu-item.component.html',
  styleUrls: ['./work-menu-item.component.css','./work-menu-item.scss']
})
export class WorkMenuItemComponent implements OnInit {

  @Input() menuItem:any;
  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  @Input() child:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

}
