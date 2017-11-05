import { IConfigurableField } from '@btas/common/configurable-field';

export interface ITabularFieldOption {
  hideCellLabels?: boolean; // whether to hide component labels automatically, defaults to true
  autoFit?: boolean;        // whether components are automatically expanded to fill the cell
  columns: Array<IConfigurableField<any>>;

  hasAdd?: boolean;        // whether rows can be added, defaults to false
  hasDelete?: boolean;     // whether rows can be deleted, defaults to false
}
