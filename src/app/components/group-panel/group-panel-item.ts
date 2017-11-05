import { IConfigurableField } from '@btas/common/configurable-field';
import { Translatable } from '@btas/lang';

export interface IGroupPanelItem {
  id?: string;
  title: string | Translatable;
  subtitle?: string | Translatable;
  summary: Array<IConfigurableField<any>>; // fields that will always be visible
  fields: Array<IConfigurableField<any>>; // fields that will be collapsed
  deletable?: boolean;
}
