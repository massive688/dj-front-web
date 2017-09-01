import {
  AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Injector, Input, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ColumnState} from "../super-table-interfaces";

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-cell]',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})

export class TableCellComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() row: any;
  @Input() column: ColumnState;
  @ViewChild('cmpContainer', {read: ViewContainerRef}) cmpContainer: ViewContainerRef;

  private componentRef: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  getValue(): any {
    return this.row[this.column.def.key];
  }

  getFormattedValue(): any {
    if (this.column.def.format) {
      return this.column.def.format(this.getValue(), this.row, this.column);
    }

    return this.getValue();
  }

  ngAfterViewInit(): void {
    if (this.column.def.component) {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      const cmpFactory = this.resolver.resolveComponentFactory(this.column.def.component);
      const ctxInjector: Injector = this.cmpContainer.injector;
      this.componentRef = this.cmpContainer.createComponent(cmpFactory, 0, ctxInjector);
      const instance: any = this.componentRef.instance;
      instance['row'] = this.row;
      instance['column'] = this.column;
      instance['key'] = this.column.def.key;
      instance['value'] = this.getValue();
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
