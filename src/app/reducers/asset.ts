import { IAsset } from '@btas/models/asset';
import * as asset from '@btas/actions/asset';

import * as uuid from 'uuid/v4';
import * as _ from 'lodash';


export interface State extends IAsset {
  assetTypesExcluded: { [key: string]: boolean };
  savedAssets: any;
}


export const initialState: State = {
  lifeStyles: null,
  cashAndFixedInterests: null,
  investmentProperties: null,
  sharesAndManagedFunds: null,
  business: null,
  other: null,
  assetTypesExcluded: {},
  savedAssets: {}
};


export function reducer(state = initialState, action: asset.Actions): State {
  let assetType;
  let assetId;
  let index;

  switch (action.type) {

    case asset.ActionTypes.ASSETS_FETCHED:
      return {
        ...state,
        ...action.payload,
        savedAssets: action.payload
      };

    case asset.ActionTypes.ADD_ASSET:
      assetType = action.payload;
      return {
        ...state,
        [assetType]: [
          ...state[assetType] || [],
          { id: uuid() }
        ]
      };

    case asset.ActionTypes.DELETE_ASSET:
      assetType = action.payload.type;
      assetId = action.payload.id;

      return {
        ...state,
        [assetType]: state[assetType].filter(
          a => a['id'] !== assetId
        )
      };

    case asset.ActionTypes.UPDATE_ASSET:
      const { newValue } = action.payload;
      assetType = action.payload.type;
      index = state[assetType].findIndex(a => a.id === newValue.id);

      return {
        ...state,
        [assetType]: [
          ...state[assetType].slice(0, index),
          newValue,
          ...state[assetType].slice(index + 1)
        ]
      };

    case asset.ActionTypes.SET_ASSET_TYPE_EXCLUDED:
      assetType = action.payload.type;
      const { excluded } = action.payload;
      const assetTypesExcluded = {
        ...state.assetTypesExcluded,
        ...{
          [assetType]: excluded
        }
      };

      return {
        ...state,
        assetTypesExcluded
      };

    case asset.ActionTypes.ASSETS_SYNCED:
      return {
        ...state,
        savedAssets: _.pick(state, [
          'lifeStyles', 'cashAndFixedInterests',
          'investmentProperties', 'sharesAndManagedFunds',
          'business', 'other', 'assetTypesExcluded'
        ])
      };

    default:
      return state;
  }
}

export const getAssets = (state: State) => state;
export const getAssetTypesExcludedMap = (state: State) => state.assetTypesExcluded;
