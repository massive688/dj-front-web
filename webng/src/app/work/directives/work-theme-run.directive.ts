import { Directive, HostBinding } from '@angular/core';
import {WorkThemeConfigProviderService} from "../services/work-theme/work-theme-config-provider.service";
import {isMobile} from "../work.constants";


@Directive({
  selector: '[workThemeRun]'
})
export class WorkThemeRunDirective {

  private _classes:Array<string> = [];
  @HostBinding('class') classesString:string;
  constructor(private _workConfig: WorkThemeConfigProviderService) { }

  public ngOnInit():void {
    this._assignTheme();
    this._assignMobile();
  }

  private _assignTheme():void {
    this._addClass(this._workConfig.get().theme.name);
  }

  private _assignMobile():void {
    if (isMobile()) {
      this._addClass('mobile');
    }
  }

  private _addClass(cls:string) {
    this._classes.push(cls);
    this.classesString = this._classes.join(' ');
  }
}
