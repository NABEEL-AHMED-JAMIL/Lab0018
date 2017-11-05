import { Pipe, PipeTransform } from '@angular/core';
import { IValueOption } from '@btas/common/value-option';

@Pipe({
  name: 'titleValue'
})
export class TitleValuePipe implements PipeTransform {
  public transform(value: any, mapping: Array<IValueOption<any>>): string {
    const mapped = mapping && mapping.find(v => v.value === value);
    return mapped ? mapped.title : value;
  }
}
