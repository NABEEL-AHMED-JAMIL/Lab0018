import { Directive, Input } from '@angular/core';
import { IConfigurableField } from '@btas/common/configurable-field';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: 'btas-dynamic-component',
  providers: [ DynamicComponentDirective ]
})
export class DynamicComponentDirective {
  @Input() public fieldConfig: IConfigurableField<any>;
  @Input() public formGroup: FormGroup;
}
