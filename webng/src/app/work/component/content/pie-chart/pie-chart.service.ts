import { Injectable } from '@angular/core';
import {WorkThemeConfigProviderService} from "../../../services/work-theme/work-theme-config-provider.service";

@Injectable()
export class PieChartService {

  constructor(private _workConfig:WorkThemeConfigProviderService) { }

  getData() {
    let pieColor = this._workConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'work.index.waiting',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'work.index.going',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'work.index.targeting_plan',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'work.index.finished',
        stats: '32,592',
        icon: 'refresh',
      }, {
        color: pieColor,
        description: 'work.index.unfinished',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
