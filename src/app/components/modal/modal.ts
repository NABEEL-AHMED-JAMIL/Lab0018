import { IGroupPanelItem } from '../group-panel/group-panel-item';


export interface IModal {
  title: string;
  subtitle: string;
  size: string;
  btntitle: string;
  items: IGroupPanelItem[];
}

export const SAVE_COMMAND = 'save';
export const APPLY_COMMAND = 'apply';
export const CANCEL_COMMAND = 'cancel';
export const DIALOG_COMMAND = 'dialog';

export type ButtonCommand = 'save' | 'cancel' | 'dialog' | 'apply';

export interface Button {
  text: string;
  command: ButtonCommand;
  styleClass?: string;
  dialog?: IModalFieldOption;
}

export const DEFAULT_BUTTON_STYLE = 'btn-sm btn-info';

export type ButtonType = Button | string;

export interface IModalFieldOption {
  title: string;
  subtitle: string;
  size: string;
  btntitle: string;
  item: IGroupPanelItem;
  buttons: ButtonType[];
}

