import { Translatable } from '@btas/lang';

export class NavItem {
  constructor(
    public text: string | Translatable,
    public routerLink: string,
    public active: boolean = true
  ) {}
}
