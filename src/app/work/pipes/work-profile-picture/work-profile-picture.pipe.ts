import { Pipe, PipeTransform } from '@angular/core';
import {layoutPaths} from "../../work.constants";

@Pipe({
  name: 'workProfilePicture'
})
export class WorkProfilePicturePipe implements PipeTransform {

  transform(value: string, ext = 'png'): string {
    return layoutPaths.images.profile + value + '.' + ext;
  }

}
