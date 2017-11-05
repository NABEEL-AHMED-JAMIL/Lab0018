import { IGroupPanelItem } from './group-panel-item';


export interface IGroupPanel {
  title: string;
  subtitle: string;
  path: string;
  items: IGroupPanelItem[];
}
