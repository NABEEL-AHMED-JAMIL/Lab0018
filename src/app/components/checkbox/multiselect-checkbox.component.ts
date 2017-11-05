import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';

import { IValueOption } from '@btas/common/value-option';
import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';


/**
 * Custom Checkbox Component
 * @param label Text to display against the checbox
 * @param model Model to use with the checkbox
 * @param disable Disable the checkbox
 *
 */
@Component({
  selector: 'btas-multiselect-checkbox',
  templateUrl: 'multiselect-checkbox.component.pug',
  styleUrls: ['./multiselect-checkbox.component.scss']
})
export class MultiselectCheckboxComponent<T>
    extends BaseDynamicComponent
    implements OnInit {

  public uuidStrings: string[] = [];
  public uuidOther: string = uuid();

  public displayOther: boolean = false;

  public optionsMap: Map<T, boolean> = new Map();
  public valuesMap: Map<T, boolean> = new Map();
  public otherValue: T;

  public get fieldValue() {
    const value = this.formGroup.value[this.fieldConfig.name];
    return value instanceof Array ? (value || []) : [value];
  }

  public set fieldValue(value) {
    this.formGroup.patchValue({
      [this.fieldConfig.name]: value
    });

    if (!this.supressChangeEvent) {
      this.onValueChanged(value);
    }
  }

  public ngOnInit(): void {
    this.uuidStrings = this.fieldConfig.options.map(o => uuid());

    this.fieldConfig.options.forEach((o) => {
      this.optionsMap.set(o.value, false);
    });

    this.fieldValue.forEach((v) => {
      if (this.optionsMap.has(v)) {
        this.optionsMap.set(v, true);
      } else {
        this.otherValue = v;
      }
    });
  }

  public isChecked(ev: any) {
    this.displayOther = ev.target.checked ? true : false;
  }

  public select(ev: any, val: T) {
    this.optionsMap.set(val, ev.target.checked);
    const values = Array.from(this.optionsMap.keys())
      .filter((k: T) => this.optionsMap.get(k));
    if (this.otherValue) {
      values.push(this.otherValue);
    }
    this.fieldValue = values;
  }

  public itemChecked(item: IValueOption<T>) {
    return this.optionsMap.get(item.value);
  }

  public onOtherChanged(ev: any) {
    const value = ev.target.value;

    if (!value) {
      return;
    }

    _.pull(this.fieldValue, this.otherValue);

    if (value) {
      this.otherValue = value;
      this.fieldValue = [
        ...this.fieldValue,
        value
      ];
    }
  }
}
