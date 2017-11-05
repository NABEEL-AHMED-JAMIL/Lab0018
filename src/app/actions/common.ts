import { Action } from '@ngrx/store';
import { type } from '@btas/utils';

export const ActionTypes = {
  SYNCING_FINISHED: type('SYNCING_FINISHED'),
  SYNCING_FAILED: type('SYNCING_FAILED')
};


export class SyncingFinishedAction implements Action {
  public type = ActionTypes.SYNCING_FINISHED;
  constructor(public payload: any = null) { }
}


export class SyncingFailedAction implements Action {
  public type = ActionTypes.SYNCING_FAILED;
  constructor(public payload: any) { }
}


export type Actions =
  SyncingFinishedAction
  | SyncingFailedAction
;

const META_BLOCK_KEY = 'ui-block-action-key';
const META_UNBLOCK_KEY = 'ui-unblock-action-key';

export function UIBlock(actionId: string) {
  return (target: new (...args: any[]) => Action) => {
    Reflect.defineProperty(target, META_BLOCK_KEY, { value: actionId });
  };
}

export function UIUnblock(actionId: string) {
  return (target: new (...args: any[]) => Action) => {
    Reflect.defineProperty(target, META_UNBLOCK_KEY, { value: actionId });
  };
}

function getMetaData<T>(obj: any, key: string): T {
  const res = Reflect.getOwnPropertyDescriptor(obj.constructor, key);
  return res && res.value;
}

export function getBlockingKey(action: Action) {
  return getMetaData<string>(action, META_BLOCK_KEY);
}

export function getUnblockKey(action: Action) {
  return getMetaData<string>(action, META_UNBLOCK_KEY);
}
