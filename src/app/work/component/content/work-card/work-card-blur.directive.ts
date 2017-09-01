import { Directive, HostBinding, ElementRef } from '@angular/core';
import {WorkThemeConfigProviderService} from "../../../services/work-theme/work-theme-config-provider.service";
import {WorkCardBlurHelper} from "./work-card-blur-helper.service";
import {BgMetrics} from "./bg-metrics";

@Directive({
  selector: '[workCardBlur]',
  providers: [WorkCardBlurHelper]
})
export class WorkCardBlurDirective {

  private _bodyBgSize:BgMetrics;

  @HostBinding('class.card-blur') isEnabled:boolean = false;
  constructor(private _workConfig:WorkThemeConfigProviderService, private _workCardBlurHelper:WorkCardBlurHelper, private _el:ElementRef) {
    if (this._isEnabled()) {
      this._workCardBlurHelper.init();
      this._getBodyImageSizesOnBgLoad();
      this._recalculateCardStylesOnBgLoad();

      this.isEnabled = true;
    }
  }

  private _isEnabled() {
    return this._workConfig.get().theme.name == 'blur';
  }

  private _getBodyImageSizesOnBgLoad():void {
    this._workCardBlurHelper.bodyBgLoad().subscribe(() => {
      this._bodyBgSize = this._workCardBlurHelper.getBodyBgImageSizes();
    });
  }


  private _recalculateCardStylesOnBgLoad():void {
    this._workCardBlurHelper.bodyBgLoad().subscribe((event) => {
      setTimeout(this._recalculateCardStyle.bind(this));
    })
  }


  private _recalculateCardStyle():void {
    if (!this._bodyBgSize) {
      return;
    }
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }

}
