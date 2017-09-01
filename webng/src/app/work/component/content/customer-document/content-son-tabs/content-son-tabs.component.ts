import {
  Compiler,
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Provider,
  ReflectiveInjector, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ITabObject} from "app/work/component/content/content-table/ya-table/ya-table-interface";
import {ContentSonTabComponent} from "app/work/component/content/customer-document/content-son-tabs/content-son-tab/content-son-tab.component";

@Component({
  selector: 'content-son-tabs',
  templateUrl: './content-son-tabs.component.html',
  styleUrls: ['./content-son-tabs.component.scss'],
  providers: []
})
export class ContentSonTabsComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.compRefs.forEach(compref=>{
      compref.destroy()
    });
  }

  @Input() tabCodes: Array<ITabObject>;
  @Input() tabRows: Array<Object> = new Array<Object>();
  @Input() isNeedRouterNavigate: boolean;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  // @ViewChild('tabsReference') myTabs: jqxTabsComponent;

  onChangeAnimation(event: any): void {
    let checked = event.args.checked;
    // this.myTabs.selectionTracker(checked);
  }
  onChangeContentAnimation(event: any): void {
    let checked = event.args.checked;
    if (checked) {
      // this.myTabs.animationType('fade');
    }
    else {
      // this.myTabs.animationType('none');
    }
  }

  @ViewChild("myTabContent",{read: ViewContainerRef}) containerRef: ViewContainerRef;

  private compRefs: Array<ComponentRef<ContentSonTabComponent>> = new Array<ComponentRef<ContentSonTabComponent>>();

  activeTab(ele:Element, tab:ITabObject) {
    this.tabCodes.map(tab=>{
      tab.active = false;
    })
    if(!tab.active){
      tab.active = true;
      if(this.compRefs.length == this.tabCodes.length){
        this.loadClass(tab);
        return;
      }
      this.loadTab(tab);
      this.loadClass(tab);
    }
  }

  loadClass(tab:ITabObject){
    let compRef = this.compRefs[0];
    let parent = compRef.location.nativeElement.parentNode;
    jQuery(parent).children().removeClass('active');
    jQuery(parent).children("#"+tab.code).addClass('active');
  }
  ngAfterContentInit():void{
    if(this.tabCodes){
      this.tabCodes.map(tab=>{
        if(tab.active)
          this.loadTab(tab);
      })
    }
  }

  private loadTab(tab:ITabObject): void{

    /*
     这里动态加载组件
     */
    let factory:ComponentFactory<ContentSonTabComponent> = this.resolver.resolveComponentFactory(ContentSonTabComponent);
    // this.compRef = this.containerRef.createComponent(factory);
    // let params:any = [{provide: 'tabCode', userValue:tab}];
    // let param:any = Object.keys(params).map((item)=>{
    //   return {provide: item, params[item]};
    // });
    // Array.forEach
    // let resolvedInputs = ReflectiveInjector.resolve(params);
    // let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.containerRef.parentInjector);

    let compRef:ComponentRef<ContentSonTabComponent> = this.containerRef.createComponent(factory);
    // if(this.compRef)
    //   this.compRef.destroy();
    // this.compRef = factory.create(injector);
    compRef.instance.tabCode = tab;
    // this.compRef = this.containerRef.createComponent(factory);
    // this.containerRef.insert(compRef.hostView);
    compRef.location.nativeElement.id = tab.code;
    compRef.location.nativeElement.classList.add('tab-pane','fade','in','active');
    this.compRefs.push(compRef);
  }

}
