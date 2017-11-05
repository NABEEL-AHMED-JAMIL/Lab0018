import { Translatable } from '@btas/lang';

export class Breadcrumb {

  constructor(
    public text: string | Translatable,
    public routerLink: string | object,
    public active: boolean = true
  ) {}
}
