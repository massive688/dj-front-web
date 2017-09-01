import { Injectable } from '@angular/core';

@Injectable()
export class WorkThemePreloaderService {

  constructor() { }

  private static _loaders:Array<Promise<any>> = [];

  public static registerLoader(method:Promise<any>):void {
    WorkThemePreloaderService._loaders.push(method);
  }

  public static clear():void {
    WorkThemePreloaderService._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve, reject) => {
      WorkThemePreloaderService._executeAll(resolve);
    });
  }

  private static _executeAll(done:Function):void {
    setTimeout(() => {
      Promise.all(WorkThemePreloaderService._loaders).then((values) => {
        done.call(null, values);
      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
