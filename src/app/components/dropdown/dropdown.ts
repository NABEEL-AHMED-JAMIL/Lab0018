import { IValueOption } from '@btas/common/value-option';

export interface IDropdown<T> {
  title: string;
  items: Array<IValueOption<T>>;
}
