import { Component } from '@angular/core';
import * as uuid from 'uuid/v4';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';


/**
 * Custom Checkbox Component
 * @param label Text to display against the checbox
 * @param model Model to use with the checkbox
 * @param disable Disable the checkbox
 *
 */
@Component({
  selector: 'btas-dynamic-checkbox',
  templateUrl: 'dynamic-checkbox.component.pug',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent extends BaseDynamicComponent {
  public uuidString: string = uuid();
}
