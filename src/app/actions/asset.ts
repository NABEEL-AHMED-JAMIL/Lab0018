import { Action } from '@ngrx/store';

import { IDataModel } from '@btas/models/base';
import { IAsset } from '@btas/models/asset';
import { type } from '@btas/utils;

export const ActionTypes = {
  FETCH_ASSETS: type('FETCH_ASSETS'),
  ASSETS_FETCHED: type('ASSETS_FETCHED'),
  ASSETS_FETCH_ERROR: type('ASSETS_FETCH_ERROR'),

  ADD_ASSET: type('ADD_ASSET'),
  UPDATE_ASSET: type('UPDATE_ASSET'),
  DELETE_ASSET: type('DELETE_ASSET'),
  SET_ASSET_TYPE_EXCLUDED: type('SET_ASSET_TYPE_EXCLUDED'),
  SYNC_ASSETS: type('SYNC_ASSETS'),
  ASSETS_SYNCED: type('ASSETS_SYNCED'),
};


export class FetchAssetsAction implements Action {
  public type = ActionTypes.FETCH_ASSETS;
  constructor(public payload: any = null) {}
}


export class AssetsFetchedAction implements Action {
  public type = ActionTypes.ASSETS_FETCHED;
  constructor(public payload: IAsset) {}
}


export class AssetsFetchErrorAction implements Action {
  public type = ActionTypes.ASSETS_FETCH_ERROR;
  constructor(public payload: any) {}
}


export class AddAssetAction implements Action {
  public type = ActionTypes.ADD_ASSET;
  constructor(public payload: string) {}
}


export class DeleteAssetAction implements Action {
  public type = ActionTypes.DELETE_ASSET;
  constructor(public payload: { type: string, id: string }) {}
}


export class UpdateAssetAction implements Action {
  public type = ActionTypes.UPDATE_ASSET;
  constructor(public payload: { type: string, newValue: IDataModel}) {}
}


export class SetAssetTypeExcludedAction implements Action {
  public type = ActionTypes.SET_ASSET_TYPE_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncAssets implements Action {
  public type = ActionTypes.SYNC_ASSETS;
  constructor(public payload: any = null) { }
}


export class AssetsSynced implements Action {
  public type = ActionTypes.ASSETS_SYNCED;
  constructor(public payload: any = null) { }
}


export type Actions =
  FetchAssetsAction
  | AssetsFetchedAction
  | AssetsFetchErrorAction
  | AddAssetAction
  | UpdateAssetAction
  | DeleteAssetAction
  | SetAssetTypeExcludedAction
  | SyncAssets
  | AssetsSynced
;
