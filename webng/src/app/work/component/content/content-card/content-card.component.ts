import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DefaultModalComponent} from "./default-modal/default-modal.component";
import {GlobalState} from "../../../../global.state";

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  /*
  cardAdd:boolean = true;
  cardAddTitle:string;
  cardDel:boolean = true;
  cardDelTitle:string;
  */
  @Input() buttons:Array<Object>;
  @Input() title:string;
  rowSelectedData:any;
  rowMultiSelectedData:any;
  constructor(private modalService: NgbModal, private _globalState:GlobalState) {

  }

  ngOnInit() {
    if(this.buttons){
      this._globalState.subscribe('table.rowChangeSelected',(row)=>{
        this.rowSelectedData = row;
      });
      this._globalState.subscribe('table.rowMultiChangeSelected',(rows)=>{
        this.rowMultiSelectedData = rows;
      });
      this._globalState.subscribe('button.AddEvent',()=>{

      });
      this._globalState.subscribe('button.EditEvent',()=>{
        if(this.rowSelectedData)
          this._globalState.notifyDataChanged('table.rowDblclickSelected',this.rowSelectedData);
        else{
          let activeModal = this.modalService.open(DefaultModalComponent, {size: 'sm',
            backdrop: 'static'});
          activeModal.componentInstance.modalHeader = '提示';
          activeModal.componentInstance.modalContent = `当前未有选中的数据`;
        }
      });
      this._globalState.subscribe('button.DelEvent',()=>{

      });
      this._globalState.subscribe('button.RefreshEvent',()=>{

      });
    }
  }
  action:number = 0;
  execSearch():void{
    let activeModal;
    switch (this.action){
      case 0:
        activeModal = this.modalService.open(DefaultModalComponent, {size: 'lg'});
        activeModal.componentInstance.modalHeader = 'Large Modal';
      break;
      case 1:
        activeModal = this.modalService.open(DefaultModalComponent, {size: 'sm'});
        activeModal.componentInstance.modalHeader = 'Small Modal';
        break;
      case 2:
        activeModal = this.modalService.open(DefaultModalComponent, {size: 'sm',
          backdrop: 'static'});
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
        break;
      case 3:
        activeModal = this.modalService.open(DefaultModalComponent, {size: 'sm'});
        activeModal.componentInstance.modalHeader = 'Child modal';
        activeModal.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
        break;
    }
    this.action++;
    this.action = this.action === 4 ? 0 : this.action;
  }
}
