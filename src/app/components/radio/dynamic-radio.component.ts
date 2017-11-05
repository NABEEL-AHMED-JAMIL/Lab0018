import { Component, OnInit } from '@angular/core';

import { YES_NO_OPTIONS } from '@btas/common/value-option';
import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';

import * as uuid from 'uuid/v4';

@Component({
  selector: 'btas-dynamic-radio',
  templateUrl: 'dynamic-radio.component.pug',
  styleUrls: ['./dynamic-radio.component.scss']
})
export class DynamicRadioComponent<T> extends BaseDynamicComponent implements OnInit {

  public textValue: string;
  public uuidStrings: string[];

  public uniqueName = uuid();

  protected supressChangeEvent = true;

  protected defaultFieldOptions = {
    displayInput: false,
    inline: true
  };

  public ngOnInit(): void {
    // set default display options
    this.fieldConfig.fieldOptions = {
      ...this.defaultFieldOptions,
      ...this.fieldConfig.fieldOptions
    };

    // set default options
    this.fieldConfig.options = this.fieldConfig.options || YES_NO_OPTIONS;

    // set uuid
    this.uuidStrings = this.fieldConfig.options.map(o => uuid());

    // set textValue
    const selected = this.fieldConfig.options.find(o => this.fieldValue === o.value);
    this.textValue = selected ? null : this.fieldValue;
  }

  public onSelect(val: T) {
    this.textValue = '';
    this.fieldValue = val;
    this.onValueChanged();
  }

  public clearRadio() {
    this.fieldValue = null;
  }

  public onTextValueChanged(ev: any) {
    this.fieldValue = ev.target.value;
    this.onValueChanged();
  }
}
