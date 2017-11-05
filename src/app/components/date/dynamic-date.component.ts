import { Component } from '@angular/core';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';


@Component({
  selector: 'btas-dynamic-date',
  templateUrl: 'dynamic-date.component.pug',
  styleUrls: ['./dynamic-date.component.scss']
})
export class DynamicDateComponent extends BaseDynamicComponent {

  public defaultOptions = {
    dateFormat: 'dd/mm/yyyy',
    alignSelectorRight: false,
    showSelectorArrow: false,
  };

  private _value: Object = null;

  public get value() {
    if (!this._value) {
      const date = new Date(this.fieldValue || null);
      this._value = {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        },
        jsdate: date
      };
    }
    return this._value;
  }

  public set value(value) {
    this._value = value;
  }

  public setDate(value) {
    const date = value.date;
    const dateString = `${date.year}-${date.month}-${date.day}`;
    this.fieldValue = dateString;
  }

}
