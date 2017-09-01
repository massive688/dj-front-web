import {
  Component, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, Input, OnDestroy, OnInit,
  ViewContainerRef
} from '@angular/core';
import {ColumnState, ISuperTableFilter} from "../super-table-interfaces";
import {Subscription} from "rxjs/Subscription";
import {SuperTableState} from "../super-table-state.service";
import { values } from 'lodash';
import {SuperTableEnumFilterDropdownComponent} from "../super-table-enum-filter-dropdown/super-table-enum-filter-dropdown.component";


@Component({
  selector: '[super-table-enum-filter]',
  templateUrl: './super-table-enum-filter.component.html',
  styleUrls: ['./super-table-enum-filter.component.scss']
})
export class SuperTableEnumFilterComponent implements OnInit {

  @Input() filter: ISuperTableFilter;
  @Input() column: ColumnState;

  private dropdown: ComponentRef<SuperTableEnumFilterDropdownComponent>;
  private disabledChoices: Set<any> = new Set<any>();
  disabledFilterCount = 0;
  private subscription: Subscription;

  constructor(
    private state: SuperTableState,
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit (): void {
    // initialize filtered values to include all
    this.column.filterValue = {};
    this.column.def.filterChoices.forEach(choice => {
      this.column.filterValue[choice] = true;
    });
    this.subscription = this.state.stateChanged$.subscribe(() => {
      this.disabledFilterCount = values(this.column.filterValue)
        .filter(isEnabled => !isEnabled)
        .length;
    });
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  toggleVisibility(): void {
    if (this.dropdown) {
      this.dropdown.destroy();
      this.dropdown = null;
    } else {
      const clientRect: ClientRect = this.el.nativeElement.getBoundingClientRect();
      const cmpFactory = this.resolver.resolveComponentFactory(SuperTableEnumFilterDropdownComponent);
      const ctxInjector: Injector = this.viewContainer.injector;
      const cmpRef: ComponentRef<SuperTableEnumFilterDropdownComponent> = this.viewContainer.createComponent(cmpFactory, 0, ctxInjector);
      cmpRef.instance.column = this.column;
      cmpRef.instance.top = clientRect.top + clientRect.height;
      cmpRef.instance.left = clientRect.left;
      cmpRef.instance.width = clientRect.width;
      cmpRef.instance.destroyMe = () => {
        this.toggleVisibility();
      };
      this.dropdown = cmpRef;
      document.body.appendChild(cmpRef.location.nativeElement);
    }
  }

}
