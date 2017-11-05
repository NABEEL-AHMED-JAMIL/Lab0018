import { Component, OnInit } from '@angular/core';
import { IValueOption, EMPTY_OPTION } from '@btas/common/value-option';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'btas-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.pug',
  styleUrls: ['./dynamic-dropdown.component.scss']
})
export class DynamicDropdownComponent<T> extends BaseDynamicComponent implements OnInit {
  public subscription: Subscription;
  public selected: IValueOption<any>;

  private options: any[];

  public ngOnInit(): void {
    this.options = this.fieldConfig.options || [];
    this.formGroup.controls[this.fieldConfig.name].valueChanges.subscribe(
      () => { this.updateSelectedValue(); }
    );

    this.updateSelectedValue();
  }

  public itemClick(ev: any , item: IValueOption<T>): void {
    ev.preventDefault();

    if (this.isItemSeparator(item)) {
      ev.stopPropagation();
      return;
    }

    this.fieldValue = item.value;
  }

  public isItemSeparator(item) {
    return 'SEPARATOR' === item.value;
  }

  private updateSelectedValue() {
    // get value at base control level
    // during valueChanges event propagation FormGroup does not have the latest value yet.
    const value = this.formGroup.controls[this.fieldConfig.name].value;
    if (value == null) {
      this.selected = EMPTY_OPTION;
    } else {
      const res = this.options ? this.options.find(m => value === m.value) : null;

      // can't find as part of the option from incoming data
      // let it slip and display it anyway
      // this is to make sure if the user did not make any changes then no changes are persisted
      this.selected = res || <IValueOption<any>> {
          title: value,
          value
      };
    }
  }
}
