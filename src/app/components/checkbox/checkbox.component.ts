import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as uuid from 'uuid/v4';

import { LabelPosition } from '@btas/common/configurable-field';


/**
 * Custom Checkbox Component
 * @param label Text to display against the checbox
 * @param model Model to use with the checkbox
 * @param disable Disable the checkbox
 *
 */
@Component({
  selector: 'btas-checkbox',
  templateUrl: 'checkbox.component.pug',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input()
  public title: string;

  @Input()
  public checked: boolean = false;

  @Output()
  public checkChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public name: string;

  @Input()
  public labelPosition: LabelPosition = 'right';

  public uuidString: string = uuid();

  public checkChanged(e) {
    this.checkChange.emit(this.checked);
  }
}
