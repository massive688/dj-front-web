import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabHref'
})
export class TabHrefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "#" + value;
  }

}
