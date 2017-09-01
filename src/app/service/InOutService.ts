import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class InOutService{

  public isWork:boolean;
  public head2Top:boolean;

  private changes: Subject<any> = new Subject<any>();

  constructor() {

  }

  public value: any;

  isWorker(iswk:boolean):void {
    this.isWork = iswk;
    this.changes.next(this.isWork);
  }
}
