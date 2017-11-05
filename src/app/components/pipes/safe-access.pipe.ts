import {
  Pipe, PipeTransform
} from '@angular/core';


@Pipe({
  name: 'mySafeAccess'
})
export class SafeAccessPipe implements PipeTransform {

  public transform(value: Object, property: string): any {
    if (value) {
      return value[property];
    }
    return null;
  }

}
