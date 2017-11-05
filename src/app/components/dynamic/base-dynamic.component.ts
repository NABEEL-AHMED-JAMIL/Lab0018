import { EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IConfigurableField } from '@btas/common/configurable-field';


export abstract class BaseDynamicComponent {

  @Input()
  public fieldConfig: IConfigurableField<any>;

  /**
   * Value Change indicates that the value associated with field has changed.
   */
  @Output()
  public valueChange: EventEmitter<any> = new EventEmitter();

  /**
   * Update model informs the parent that the component wants to make changes to the model
   * directly.
   *
   * This is useful for components that can manipulate multiple values at the same time, but
   * do not construct the entire form control hierarchy up-front. e.g. modal
   */
  @Output()
  public updateModel: EventEmitter<any> = new EventEmitter();

  @Input()
  public formGroup: FormGroup;

  // control if set fieldValue would emit valueChange
  protected supressChangeEvent: boolean = false;

  public get fieldValue() {
    return this.formGroup.value[this.fieldConfig.name];
  }

  public set fieldValue(value) {
    this.formGroup.patchValue({
      [this.fieldConfig.name]: value
    });

    if (!this.supressChangeEvent) {
      this.onValueChanged(value);
    }
  }

  /**
   * @param {any} value - value that needs to be emitted
   *    if the value is null, the corresponding field value
   *    will be emitted
   */
  public onValueChanged(value = null) {
    this.valueChange.emit(value ? value : this.fieldValue);
  }
}
