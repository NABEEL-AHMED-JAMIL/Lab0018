import { Translatable } from '@btas/lang';

export interface IPage {
  title: string | Translatable;
  subtitle?: string | Translatable;
}
