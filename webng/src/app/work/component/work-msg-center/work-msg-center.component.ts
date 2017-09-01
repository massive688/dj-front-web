import { Component, OnInit } from '@angular/core';
import {WorkMsgCenterService} from "../../services/work-msg-center/work-msg-center.service";

@Component({
  selector: 'work-msg-center',
  templateUrl: './work-msg-center.component.html',
  styleUrls: ['./work-msg-center.component.css','./work-msg-center.scss'],
  providers: [WorkMsgCenterService]
})
export class WorkMsgCenterComponent implements OnInit {

  public notifications:Array<Object>;
  public messages:Array<Object>;
  constructor(private workMsgCenterService: WorkMsgCenterService) { }

  ngOnInit() {
    this.notifications = this.workMsgCenterService.getNotifications();
    this.messages = this.workMsgCenterService.getMessages();
  }

}
