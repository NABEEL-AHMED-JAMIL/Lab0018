import { PLEASE_SELECT, YES, NO } from '@data/base.reference';
import { Translatable } from '@btas/lang';

export interface IValueOption<T> {
  title: string | Translatable;
  value: T;
}

export const EMPTY_OPTION: IValueOption<any> = {
  title: PLEASE_SELECT,
  value: null
};


export const YES_NO_OPTIONS: Array<IValueOption<boolean>> = [
  {
    title: YES,
    value: true
  },
  {
    title: NO,
    value: false
  }
];


export function optionsFromRef(key) {
  return () => {
    JSON.parse(sessionStorage.getItem(key));
  };
}
