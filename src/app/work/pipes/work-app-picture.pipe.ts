import { Pipe, PipeTransform } from '@angular/core';
import {layoutPaths} from "../work.constants";

@Pipe({
  name: 'workAppPicture'
})
export class WorkAppPicturePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value && value.startsWith('http')){
      return value;
    }
    return layoutPaths.images.root + value;
  }

}
