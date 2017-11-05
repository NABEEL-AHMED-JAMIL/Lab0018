import { ValidatorFn } from '@angular/forms';
import { IModalFieldOption } from '@btas/components/modal/modal';
import { Translatable } from '@btas/lang';


export type LabelPosition = 'top' | 'left' | 'right' | 'hidden';


export interface IConfigurableField<T> {
  name: string; // form control name
  title: string | Translatable; // label title
  type: string; // type of control
  displayOnly?: boolean; // whether this field should exist with a corresponding form field value
                         // used by the special modal field type where there's no field value
                         // defaults to false

  value?: T; // default display text
  options?: any; // if control is select, this is for options

  checked?: boolean; // if control is checkbox, that is for checked
  readonly?: boolean;

  label?: LabelPosition;
  labelPosition?: LabelPosition; // where the label should appear

  span?: number; // use in bootstrap layout, col-md-span
  hideWhen?: string; // expression that hides the field if evaluated to true.
  labelSpan?: number; // label span inside the div
  fieldSpan?: number; // field span inside the div

  validation?: ValidatorFn | ValidatorFn[]; // validation rules
  fieldOptions?: IModalFieldOption | any; // additional options to the field if necessary
}
