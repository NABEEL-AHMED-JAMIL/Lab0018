import { Translatable } from '@btas/lang';

export class MasterViewItem {
  constructor(
    public text: string | Translatable,
    public routerLink: string | object
  ) {}
}
