import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


export interface IAutoSave {
  autoSave: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class AutoSaveService implements CanDeactivate<IAutoSave> {
  public canDeactivate(component: IAutoSave) {
    return component.autoSave ? component.autoSave() : true;
  }
}
