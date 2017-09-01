import {Component, Input, OnInit, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from "@angular/forms";

@Component({
  selector: 'work-checkbox',
  templateUrl: './work-checkbox.component.html',
  styleUrls: ['./work-checkbox.component.scss']
})
export class WorkCheckboxComponent implements OnInit, ControlValueAccessor {
  writeValue(state: any): void {
    this.state = state;
  }

  registerOnChange(fn: any): void {
    this.onChange = function(state: boolean) {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  @Input() disabled:boolean;
  @Input() label:string;
  @Input() value:string;
  public state: boolean;
  @Input() workCheckboxClass:string;

  public model: NgModel;
  constructor(@Self() state:NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  ngOnInit() {
  }

  public onChange(value: any): void {
  }
  public onTouch(value: any): void {
  }
}
